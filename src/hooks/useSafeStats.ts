import { useContext } from 'react'
import { formatValue } from '@/lib/formatValue'
import SafeStatsContext from '@/contexts/SafeStatsContext'
import { DUNE_API_KEY } from '@/config/constants'
import { duneQueryUrlBuilder } from '@/lib/duneQueryUrlBuilder'

const QUERY_ID_TOTAL_TRANSACTIONS = 2093960
const QUERY_ID_TOTAL_ASSETS = 2893829
const QUERY_ID_TOTAL_SAFES_DEPLOYED = 2459401

export const fetchTotalTransactions = async (): Promise<number | null> => {
  return fetch(duneQueryUrlBuilder(QUERY_ID_TOTAL_TRANSACTIONS, DUNE_API_KEY))
    .then((res) => res.json())
    .then((data) => data.result.rows[0].num_txs)
    .catch(() => null)
}

export const fetchTotalAssets = async (): Promise<number | null> => {
  return fetch(duneQueryUrlBuilder(QUERY_ID_TOTAL_ASSETS, DUNE_API_KEY))
    .then((res) => res.json())
    .then((data) => data.result.rows[0].usd_value)
    .catch(() => null)
}

export const fetchTotalSafesDeployed = async (): Promise<number | null> => {
  return fetch(duneQueryUrlBuilder(QUERY_ID_TOTAL_SAFES_DEPLOYED, DUNE_API_KEY))
    .then((res) => res.json())
    .then((data) => data.result.rows[0].num_safes)
    .catch(() => null)
}

export const useSafeStats = (): Array<string | null> => {
  const { totalTransactions, totalAssets, totalSafesDeployed } = useContext(SafeStatsContext)

  const formattedTotalTransactions = totalTransactions ? formatValue(totalTransactions) : null
  const formattedTotalAssets = totalAssets ? '$' + formatValue(totalAssets) : null
  const formattedTotalSafesDeployed = totalSafesDeployed ? formatValue(totalSafesDeployed) : null

  return [formattedTotalTransactions, formattedTotalAssets, formattedTotalSafesDeployed]
}
