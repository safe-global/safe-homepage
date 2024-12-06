import { useContext } from 'react'
import { formatValue } from '@/lib/formatValue'
import SafeStatsContext from '@/contexts/SafeStatsContext'

type SafeStats = {
  formattedTotalTransactions: string | null
  formattedTotalBalanceUsd: string | null
  formattedTotalSafesDeployed: string | null
  formattedMonthlyActiveUsers: string | null
}

export const useSafeStats = (): SafeStats => {
  const { totalTransactions, totalBalanceUsd, totalSafesDeployed, monthlyActiveUsers } = useContext(SafeStatsContext)

  const formattedTotalTransactions = totalTransactions ? formatValue(totalTransactions) : null
  const formattedTotalBalanceUsd = totalBalanceUsd ? '$' + formatValue(totalBalanceUsd) : null
  const formattedTotalSafesDeployed = totalSafesDeployed ? formatValue(totalSafesDeployed) : null
  const formattedMonthlyActiveUsers = monthlyActiveUsers ? formatValue(monthlyActiveUsers) : null

  return {
    formattedTotalTransactions,
    formattedTotalBalanceUsd,
    formattedTotalSafesDeployed,
    formattedMonthlyActiveUsers,
  }
}
