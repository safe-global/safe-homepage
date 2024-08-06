import { createContext } from 'react'

type SafeDataRoomStats = {
  tvlToGDPPercentage: number | null
  usdcPercentageStored: number | null
  cryptoPunksStoredPercentage: number | null
  totalVolumeTransfered: number | null
  onChainTransactionsPercentage: number | null
  tvlSafe: number | null
  tvlRobinhood: number | null
  tvlOKX: number | null
  tvlBinance: number | null
  lastUpdated: number | null
}

const SafeDataRoomContext = createContext<SafeDataRoomStats>({
  tvlToGDPPercentage: null,
  usdcPercentageStored: null,
  cryptoPunksStoredPercentage: null,
  totalVolumeTransfered: null,
  onChainTransactionsPercentage: null,
  tvlSafe: null,
  tvlRobinhood: null,
  tvlOKX: null,
  tvlBinance: null,
  lastUpdated: null,
})

export default SafeDataRoomContext
