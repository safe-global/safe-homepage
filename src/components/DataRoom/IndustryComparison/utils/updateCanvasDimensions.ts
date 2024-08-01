export const updateCanvasDimensions = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  width: number,
  height: number,
): void => {
  if (canvasRef.current) {
    const pixelRatio = window.devicePixelRatio || 1
    canvasRef.current.width = width * pixelRatio
    canvasRef.current.height = height * pixelRatio
    canvasRef.current.style.width = `${width}px`
    canvasRef.current.style.height = `${height}px`

    const ctx = canvasRef.current.getContext('2d')
    if (ctx) {
      ctx.scale(pixelRatio, pixelRatio)
    }
  }
}
