import { createContext } from 'react'

type SafeDataRoomStats = {
  annualStakeFees: number | null
  annualSwapFees: number | null
  annualisedOutgoingTVP: number | null
  cryptoPunksStoredPercentage: number | null
  lastUpdated: number | null
  onChainTransactionsPercentage: number | null
  totalVolumeTransferred: number | null
  tvlAAVE: number | null
  tvlBinance: number | null
  tvlEigenLayer: number | null
  tvlLido: number | null
  tvlOKX: number | null
  tvlRobinhoodCEX: number | null
  tvlSafe: number | null
  tvlUniswap: number | null
  tvpToGDPPercentage: number | null
  usdcPercentageStored: number | null
}

const SafeDataRoomContext = createContext<Partial<SafeDataRoomStats>>({
  annualStakeFees: null,
  annualSwapFees: null,
  annualisedOutgoingTVP: null,
  cryptoPunksStoredPercentage: null,
  lastUpdated: null,
  onChainTransactionsPercentage: null,
  totalVolumeTransferred: null,
  tvlAAVE: null,
  tvlBinance: null,
  tvlEigenLayer: null,
  tvlLido: null,
  tvlOKX: null,
  tvlRobinhoodCEX: null,
  tvlSafe: null,
  tvlUniswap: null,
  tvpToGDPPercentage: null,
  usdcPercentageStored: null,
})

export default SafeDataRoomContext
