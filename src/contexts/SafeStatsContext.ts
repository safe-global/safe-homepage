import { createContext } from 'react'

type SafeStats = {
  totalBalanceUsd: number | null
  totalTransactions: number | null
  totalSafesDeployed: number | null
  monthlyActiveUsers: number | null
}

const SafeStatsContext = createContext<Partial<SafeStats>>({
  totalBalanceUsd: null,
  totalTransactions: null,
  totalSafesDeployed: null,
  monthlyActiveUsers: null,
})

export default SafeStatsContext
