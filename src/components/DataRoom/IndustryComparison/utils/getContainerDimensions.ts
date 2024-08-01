export const getContainerDimensions = (
  containerRef: React.RefObject<HTMLDivElement>,
): { width: number; height: number } => {
  if (containerRef.current) {
    const { clientWidth, clientHeight } = containerRef.current
    return { width: clientWidth, height: clientHeight }
  }
  return { width: 0, height: 0 }
}
