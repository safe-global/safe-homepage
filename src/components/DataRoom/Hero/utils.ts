import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { MotionValue } from 'framer-motion'
import { easing } from 'maath'
import { Effect } from 'postprocessing'
import { CanvasTexture, Color, NearestFilter, RepeatWrapping, Texture, Uniform } from 'three'

type ASCIIEffectOptions = {
  characters?: string
  fontSize?: number
  cellSize?: number
  color?: string
  invert?: boolean
}

const SIZE = 1024
const MAX_PER_ROW = 16
const CELL = SIZE / MAX_PER_ROW

export const CameraController = ({ zoomLevel, isMobile }: { zoomLevel: MotionValue<number>; isMobile: boolean }) => {
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const updateMouse = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }
    globalThis?.addEventListener('mousemove', updateMouse)
    return () => globalThis?.removeEventListener('mousemove', updateMouse)
  }, [])

  useFrame((state, delta) => {
    state.camera.zoom = zoomLevel.get()
    state.camera.updateProjectionMatrix()

    // Apply damping to camera position based on mouse movement on desktop
    if (!isMobile) {
      easing.damp3(
        state.camera.position,
        [1 - mouse.current.x * 2, 1 - mouse.current.y * 2, 20 + Math.atan(mouse.current.y * 4)],
        0.3,
        delta,
      )
    }

    state.camera.position.set(state.camera.position.x, state.camera.position.y, 5)
    state.camera.lookAt(0, 0, 0)
  })

  return null
}

const fragmentShader = `
uniform sampler2D uCharacters;
uniform float uCharactersCount;
uniform float uCellSize;
uniform bool uInvert;
uniform vec3 uColor;

const vec2 SIZE = vec2(16.);

vec3 greyscale(vec3 color, float strength) {
    float g = dot(color, vec3(0.299, 0.587, 0.114));
    return mix(color, vec3(g), strength);
}

vec3 greyscale(vec3 color) {
    return greyscale(color, 1.0);
}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec2 cell = resolution / uCellSize;
    vec2 grid = 1.0 / cell;
    vec2 pixelizedUV = grid * (0.5 + floor(uv / grid));
    vec4 pixelized = texture2D(inputBuffer, pixelizedUV);
    float greyscaled = greyscale(pixelized.rgb).r;

    if (uInvert) {
        greyscaled = 1.0 - greyscaled;
    }

    float characterIndex = floor((uCharactersCount - 1.0) * greyscaled);
    vec2 characterPosition = vec2(mod(characterIndex, SIZE.x), floor(characterIndex / SIZE.y));
    vec2 offset = vec2(characterPosition.x, -characterPosition.y) / SIZE;
    vec2 charUV = mod(uv * (cell / SIZE), 1.0 / SIZE) - vec2(0., 1.0 / SIZE) + offset;
    vec4 asciiCharacter = texture2D(uCharacters, charUV);

    asciiCharacter.rgb = uColor * asciiCharacter.r;
    asciiCharacter.a = pixelized.a;
    outputColor = asciiCharacter;
}
`
export class ASCIIEffect extends Effect {
  constructor({
    characters = ` .:,'-^=*+?!|0#X%WM@`,
    fontSize = 64,
    cellSize = 28,
    color = '#12FF80',
    invert = true,
  }: ASCIIEffectOptions = {}) {
    const uniforms = new Map<string, Uniform<any>>([
      ['uCharacters', new Uniform(new Texture())],
      ['uCellSize', new Uniform(cellSize)],
      ['uCharactersCount', new Uniform(characters.length)],
      ['uColor', new Uniform(new Color(color))],
      ['uInvert', new Uniform(invert)],
    ])

    super('ASCIIEffect', fragmentShader, { uniforms })

    const charactersTextureUniform = this.uniforms.get('uCharacters')

    if (charactersTextureUniform) {
      charactersTextureUniform.value = this.createCharactersTexture(characters, fontSize)
    }
  }

  /** Draws the characters on a Canvas and returns a texture */
  private createCharactersTexture(characters: string, fontSize: number): CanvasTexture {
    const canvas = document.createElement('canvas')

    canvas.width = canvas.height = SIZE

    const texture = new CanvasTexture(canvas, undefined, RepeatWrapping, RepeatWrapping, NearestFilter, NearestFilter)

    const context = canvas.getContext('2d')

    if (!context) {
      throw new Error('Context not available')
    }

    context.clearRect(0, 0, SIZE, SIZE)
    context.font = `${fontSize}px Citerne`
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.fillStyle = '#FFF'

    for (let i = 0; i < characters.length; i++) {
      const char = characters[i]
      const x = i % MAX_PER_ROW
      const y = Math.floor(i / MAX_PER_ROW)

      context.fillText(char, x * CELL + CELL / 2, y * CELL + CELL / 2)
    }

    texture.needsUpdate = true

    return texture
  }
}
