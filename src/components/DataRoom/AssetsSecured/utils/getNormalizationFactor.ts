import type { CEX } from '../Cex'
import { getTvlValue } from './getTvlValue'

const MAX_WIDTH = 648
const SQUARE_WIDTH = 24

export const getNormalizationFactor = (
  cexes: CEX[],
  tvlRobinhood: number | null,
  tvlOKX: number | null,
  tvlBinance: number | null,
  tvlSafe: number | null,
): number => {
  const maxTvl = Math.max(
    ...cexes.map((cex) => getTvlValue(cexes, tvlRobinhood, tvlOKX, tvlBinance, tvlSafe, cex.name)),
  )
  const maxSquares = MAX_WIDTH / SQUARE_WIDTH
  console.log(maxTvl / maxSquares)
  const normalizationFactor = maxTvl / maxSquares
  return normalizationFactor
}
