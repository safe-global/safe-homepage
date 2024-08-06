import type { CEX } from '../Cex'

export const getTvlValue = (
  cexes: CEX[],
  tvlRobinhood: number | null,
  tvlOKX: number | null,
  tvlBinance: number | null,
  tvlSafe: number | null,
  id: string,
) => {
  const cex = cexes.find((c) => c.id === id)
  if (!cex) return 0

  switch (id) {
    case 'Robinhood':
      return tvlRobinhood ?? cex.tvl
    case 'OKX':
      return tvlOKX ?? cex.tvl
    case 'Binance':
      return tvlBinance ?? cex.tvl
    case 'Safe':
      return tvlSafe ?? cex.tvl
    default:
      return cex.tvl
  }
}
