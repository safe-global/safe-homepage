import { useContext } from 'react'
import { formatValue } from '@/lib/formatValue'
import SafeStatsContext from '@/contexts/SafeStatsContext'
import { DUNE_API_KEY } from '@/config/constants'
import { duneQueryUrlBuilder } from '@/lib/duneQueryUrlBuilder'

const QUERY_ID_TOTAL_TRANSACTIONS = 2093960
const QUERY_ID_TOTAL_ASSETS_BY_CHAIN = 3609251
const QUERY_ID_TOTAL_SAFES_DEPLOYED = 2459401
const QUERY_ID_MONTHLY_ACTIVE_USERS = 4151164

export const fetchTotalTransactions = async (): Promise<number | null> => {
  return fetch(duneQueryUrlBuilder(QUERY_ID_TOTAL_TRANSACTIONS, DUNE_API_KEY))
    .then((res) => res.json())
    .then((data) => data.result.rows[0].num_txs)
    .catch(() => null)
}

export const fetchTotalBalanceUsd = async (): Promise<number | null> => {
  // TODO: Uncomment this code after agreeing with the narrative team on the data source
  return null
  // return fetch(duneQueryUrlBuilder(QUERY_ID_TOTAL_ASSETS_BY_CHAIN, DUNE_API_KEY))
  //   .then((res) => res.json())
  //   .then((data) => {
  //     return data.result.rows[0].total_balance_usd
  //   })
  //   .catch(() => null)
}

export const fetchTotalSafesDeployed = async (): Promise<number | null> => {
  return fetch(duneQueryUrlBuilder(QUERY_ID_TOTAL_SAFES_DEPLOYED, DUNE_API_KEY))
    .then((res) => res.json())
    .then((data) => data.result.rows[0].num_safes)
    .catch(() => null)
}

export const fetchMonthlyActiveUsers = async (): Promise<number | null> => {
  return fetch(duneQueryUrlBuilder(QUERY_ID_MONTHLY_ACTIVE_USERS, DUNE_API_KEY))
    .then((res) => res.json())
    .then((data) => data.result.rows[data.result.rows.length - 1].active_users)
    .catch(() => null)
}

export const useSafeStats = (): Array<string | null> => {
  const { totalTransactions, totalBalanceUsd, totalSafesDeployed, monthlyActiveUsers } = useContext(SafeStatsContext)

  const formattedTotalTransactions = totalTransactions ? formatValue(totalTransactions) : null
  const formattedTotalBalanceUsd = totalBalanceUsd ? '$' + formatValue(totalBalanceUsd) : null
  const formattedTotalSafesDeployed = totalSafesDeployed ? formatValue(totalSafesDeployed) : null
  const formattedMonthlyActiveUsers = monthlyActiveUsers ? formatValue(monthlyActiveUsers) : null

  return [
    formattedTotalTransactions,
    formattedTotalBalanceUsd,
    formattedTotalSafesDeployed,
    formattedMonthlyActiveUsers,
  ]
}
