type Position = { x: number; y: number }

const MAX_SCALE_DISTANCE = 15
const MOBILE_MAX_SCALE = 8
const DESKTOP_MAX_SCALE = 12
const DOT_COLOR = '#121312'

let lastUpdatedArea: { x: number; y: number; radius: number } | null = null

export const drawDots = (
  ctx: CanvasRenderingContext2D,
  dots: Position[],
  mousePosition: Position,
  isMobile: boolean,
) => {
  const maxScale = isMobile ? MOBILE_MAX_SCALE : DESKTOP_MAX_SCALE
  const updatedRadius = MAX_SCALE_DISTANCE * maxScale

  // Clear the previously updated area
  if (lastUpdatedArea) {
    ctx.clearRect(
      lastUpdatedArea.x - lastUpdatedArea.radius,
      lastUpdatedArea.y - lastUpdatedArea.radius,
      lastUpdatedArea.radius * 2,
      lastUpdatedArea.radius * 2,
    )
  }
  // Clear the new (to be updated) area
  ctx.clearRect(mousePosition.x - updatedRadius, mousePosition.y - updatedRadius, updatedRadius * 2, updatedRadius * 2)

  ctx.fillStyle = DOT_COLOR

  dots.forEach((dot) => {
    const dx = mousePosition.x - dot.x
    const dy = mousePosition.y - dot.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance <= updatedRadius) {
      const scale = Math.max(1, maxScale - distance / MAX_SCALE_DISTANCE)
      ctx.beginPath()
      ctx.arc(dot.x, dot.y, 1 * scale, 0, 2 * Math.PI)
      ctx.fill()
    } else {
      // Draw unupdated dots with normal size
      ctx.beginPath()
      ctx.arc(dot.x, dot.y, 1, 0, 2 * Math.PI)
      ctx.fill()
    }
  })

  lastUpdatedArea = { x: mousePosition.x, y: mousePosition.y, radius: updatedRadius }
}
