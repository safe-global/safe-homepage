const SQUARE_WIDTH = 24

export const getNormalizationFactor = (viewportWidth: number, tvls: number[]): number => {
  const maxTvl = Math.max(...tvls)
  const maxSquares = viewportWidth / SQUARE_WIDTH

  const normalizationFactor = maxTvl / maxSquares

  return normalizationFactor
}
