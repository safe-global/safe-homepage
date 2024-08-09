const MAX_WIDTH = 648
const SQUARE_WIDTH = 24

export const getNormalizationFactor = (tvls: number[]): number => {
  const maxSquares = MAX_WIDTH / SQUARE_WIDTH

  const maxTvl = Math.max(...tvls)
  const normalizationFactor = maxTvl / maxSquares

  return normalizationFactor
}
