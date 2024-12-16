import useContainerSize from '@/hooks/useContainerSize'
import React, { useEffect, useRef, useMemo, useCallback } from 'react'

type WaveProps = {
  height?: number
  colors?: string[]
  amplitude?: number
  frequency?: number
  speed?: number
}

const DEFAULT_HEIGHT = 600
const DEFAULT_COLORS = ['#12FF80', '#008A40', '#003C1C']
const DEFAULT_AMPLITUDE = 100
const DEFAULT_FREQUENCY = 1
const DEFAULT_SPEED = 0.8
const STROKE_WIDTH = 4

const Wave = ({
  height = DEFAULT_HEIGHT,
  colors = DEFAULT_COLORS,
  amplitude = DEFAULT_AMPLITUDE,
  frequency = DEFAULT_FREQUENCY,
  speed = DEFAULT_SPEED,
}: WaveProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { width } = useContainerSize(containerRef)
  const animationRef = useRef<number>()

  const dpr = useMemo(() => window.devicePixelRatio || 1, [])

  const paths = useMemo(() => {
    if (width === 0) return [[], [], []]
    const calculatePath = (amplitudeOffset: number) =>
      Array.from(
        { length: width + 1 },
        (_, i) => (amplitude - amplitudeOffset) * Math.sin((i / width) * 2 * Math.PI * frequency),
      )
    return [calculatePath(80), calculatePath(40), calculatePath(0)]
  }, [width, amplitude, frequency])

  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!ctx || !canvas || width === 0) return

    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    ctx.scale(dpr, dpr)
  }, [width, height, dpr])

  const drawWave = useCallback(
    (ctx: CanvasRenderingContext2D, path: number[], color: string, shift: number) => {
      ctx.beginPath()
      ctx.lineWidth = STROKE_WIDTH
      ctx.strokeStyle = color

      for (let i = 0; i <= width; i++) {
        ctx.lineTo(i, height / 2 + path[(i + Math.floor(shift)) % width])
      }

      ctx.stroke()
    },
    [width, height],
  )

  const animate = useCallback(
    (time: number) => {
      const canvas = canvasRef.current
      const ctx = canvas?.getContext('2d')
      if (!ctx || !canvas) return

      const shift = (time * speed) % width

      ctx.clearRect(0, 0, width, height)

      paths.forEach((path, index) => {
        drawWave(ctx, path, colors[index % colors.length], shift)
      })

      animationRef.current = requestAnimationFrame(animate)
    },
    [width, height, paths, speed, colors, drawWave],
  )

  useEffect(() => {
    setupCanvas()
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [setupCanvas, animate])

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      <canvas ref={canvasRef} />
    </div>
  )
}

export default Wave
