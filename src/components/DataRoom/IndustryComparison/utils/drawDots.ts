type Position = { x: number; y: number }

const DOT_COLOR = '#fff'

export const drawDots = (ctx: CanvasRenderingContext2D, dots: Position[]) => {
  ctx.fillStyle = DOT_COLOR
  dots.forEach((dot) => {
    ctx.beginPath()
    ctx.arc(dot.x, dot.y, 1, 0, 2 * Math.PI)
    ctx.fill()
  })
}
