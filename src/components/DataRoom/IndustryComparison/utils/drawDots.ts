import { lerp } from '@/lib/lerp'

type Position = { x: number; y: number }

const MAX_SCALE_DISTANCE = 15
const MOBILE_MAX_SCALE = 8
const DESKTOP_MAX_SCALE = 12
const DOT_COLOR = '#121312'
const LERP_FACTOR = 0.07

// Initialize lerpedMousePosition outside the function
let lerpedMousePosition: Position = { x: 0, y: 0 }

export const drawDots = (
  ctx: CanvasRenderingContext2D,
  dots: Position[],
  dimensions: { width: number; height: number },
  mousePosition: Position,
  isMobile: boolean,
) => {
  ctx.clearRect(0, 0, dimensions.width, dimensions.height)

  const maxScale = isMobile ? MOBILE_MAX_SCALE : DESKTOP_MAX_SCALE

  ctx.fillStyle = DOT_COLOR

  // Update lerpedMousePosition
  lerpedMousePosition.x = lerp(lerpedMousePosition.x, mousePosition.x, LERP_FACTOR)
  lerpedMousePosition.y = lerp(lerpedMousePosition.y, mousePosition.y, LERP_FACTOR)

  dots.forEach((dot) => {
    const dx = lerpedMousePosition.x - dot.x
    const dy = lerpedMousePosition.y - dot.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    // Apply scale effect
    const scale = Math.max(1, maxScale - distance / MAX_SCALE_DISTANCE)

    ctx.beginPath()
    ctx.arc(dot.x, dot.y, 1 * scale, 0, 2 * Math.PI)
    ctx.fill()
  })

  return lerpedMousePosition
}
