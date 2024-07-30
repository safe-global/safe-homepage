export const updateCanvasDimensions = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  containerRef: React.RefObject<HTMLDivElement>,
) => {
  if (canvasRef.current && containerRef.current) {
    const { clientWidth, clientHeight } = containerRef.current
    const pixelRatio = window.devicePixelRatio || 1
    canvasRef.current.width = clientWidth * pixelRatio
    canvasRef.current.height = clientHeight * pixelRatio
    canvasRef.current.style.width = `${clientWidth}px`
    canvasRef.current.style.height = `${clientHeight}px`

    const ctx = canvasRef.current.getContext('2d')
    if (ctx) {
      ctx.scale(pixelRatio, pixelRatio)
    }
    return { width: clientWidth, height: clientHeight }
  }
  return { width: 0, height: 0 }
}
