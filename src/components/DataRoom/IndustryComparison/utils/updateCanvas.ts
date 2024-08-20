/**
 * Updates the canvas size and scale to account for device pixel ratio.
 * @param canvas - The HTML canvas element to update
 * @param ctx - The 2D rendering context of the canvas
 * @param width - The desired width of the canvas in CSS pixels
 * @param height - The desired height of the canvas in CSS pixels
 */
export function updateCanvas(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, width: number, height: number) {
  const dpr = window.devicePixelRatio || 1
  canvas.width = width * dpr
  canvas.height = height * dpr
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`
  ctx.scale(dpr, dpr)
}
