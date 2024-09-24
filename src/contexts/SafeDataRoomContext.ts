import { createContext } from 'react'

type SafeDataRoomStats = {
  tvpToGDPPercentage: number | null
  usdcPercentageStored: number | null
  cryptoPunksStoredPercentage: number | null
  totalVolumeTransferred: number | null
  onChainTransactionsPercentage: number | null
  tvlSafe: number | null
  tvlRobinhoodCEX: number | null
  tvlOKX: number | null
  tvlBinance: number | null
  lastUpdated: number | null
  annualSwapFees: number | null
}

const SafeDataRoomContext = createContext<SafeDataRoomStats>({
  tvpToGDPPercentage: null,
  usdcPercentageStored: null,
  cryptoPunksStoredPercentage: null,
  totalVolumeTransferred: null,
  onChainTransactionsPercentage: null,
  tvlSafe: null,
  tvlRobinhoodCEX: null,
  tvlOKX: null,
  tvlBinance: null,
  lastUpdated: null,
  annualSwapFees: null,
})

export default SafeDataRoomContext
