import { createContext } from 'react'

type SafeDataRoomStats = {
  totalValueLocked: number | null
  tvlToGDPPercentage: number | null
  usdcPercentageStored: number | null
  cryptoPunksStoredPercentage: number | null
  totalVolumeTransfered: number | null
  onChainTransactionsPercentage: number | null
}

const SafeDataRoomContext = createContext<SafeDataRoomStats>({
  totalValueLocked: null,
  tvlToGDPPercentage: null,
  usdcPercentageStored: null,
  cryptoPunksStoredPercentage: null,
  totalVolumeTransfered: null,
  onChainTransactionsPercentage: null,
})

export default SafeDataRoomContext
