import { lerp } from './lerp'

const MAX_SCALE_DISTANCE = 15
const MAX_POSITION_DISTANCE = 100
const MOBILE_MAX_SCALE = 8
const DESKTOP_MAX_SCALE = 12
const DOT_COLOR = '#121312'

export const drawDots = (
  ctx: CanvasRenderingContext2D,
  dots: { x: number; y: number }[],
  dimensions: { width: number; height: number },
  mousePosition: { x: number; y: number },
  lerpedMousePosition: { x: number; y: number },
  isMobile: boolean,
) => {
  ctx.clearRect(0, 0, dimensions.width, dimensions.height)

  const maxScale = isMobile ? MOBILE_MAX_SCALE : DESKTOP_MAX_SCALE

  ctx.fillStyle = DOT_COLOR

  // Update lerpedMousePosition
  lerpedMousePosition.x = lerp(lerpedMousePosition.x, mousePosition.x)
  lerpedMousePosition.y = lerp(lerpedMousePosition.y, mousePosition.y)

  dots.forEach((dot) => {
    const dx = lerpedMousePosition.x - dot.x
    const dy = lerpedMousePosition.y - dot.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    // Apply scale effect
    const scale = Math.max(1, maxScale - distance / MAX_SCALE_DISTANCE)

    // Calculate force for translation
    const force = Math.max(0, (MAX_POSITION_DISTANCE - distance) / MAX_POSITION_DISTANCE)

    ctx.beginPath()
    ctx.arc(dot.x, dot.y, 1 * scale, 0, 2 * Math.PI)
    ctx.fill()
  })

  return lerpedMousePosition
}
