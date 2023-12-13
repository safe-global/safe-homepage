import { createContext } from 'react'

type SafeStats = {
  totalAssets: number | null
  totalTransactions: number | null
  totalSafesDeployed: number | null
}

const SafeStatsContext = createContext<SafeStats>({
  totalAssets: null,
  totalTransactions: null,
  totalSafesDeployed: null,
})

export default SafeStatsContext
