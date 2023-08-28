import { useContext } from 'react'
import { formatValue } from '@/lib/formatValue'
import { DUNE_API_KEY } from '@/config/constants'
import SafeStatsContext from '@/components/common/SafeStatsContext'

const QUERY_ID_TOTAL_TRANSACTIONS = 2093960
const QUERY_ID_TOTAL_ASSETS = 2893829
const QUERY_ID_TOTAL_SAFES_DEPLOYED = 2459401

function totalAssetsEndpoint(queryId: number): string {
  return `https://api.dune.com/api/v1/query/${queryId}/results?api_key=${DUNE_API_KEY}`
}

export const fetchTotalTransactions = async (): Promise<number | null> => {
  return fetch(totalAssetsEndpoint(QUERY_ID_TOTAL_TRANSACTIONS))
    .then((res) => res.json())
    .then((data) => data.result.rows[0].num_txs)
    .catch(() => null)
}

export const fetchTotalAssets = async (): Promise<number | null> => {
  return fetch(totalAssetsEndpoint(QUERY_ID_TOTAL_ASSETS))
    .then((res) => res.json())
    .then((data) => data.result.rows[0].usd_value)
    .catch(() => null)
}

export const fetchTotalSafesDeployed = async (): Promise<number | null> => {
  return fetch(totalAssetsEndpoint(QUERY_ID_TOTAL_SAFES_DEPLOYED))
    .then((res) => res.json())
    .then((data) => data.result.rows[0].num_safes)
    .catch(() => null)
}

export const useSafeStats = (): Array<string | null> => {
  const { totalAssets, totalSafesDeployed, totalTransactions } = useContext(SafeStatsContext)

  const formattedTotalTransactions = totalTransactions ? formatValue(totalTransactions) : null
  const formattedTotalAssets = totalAssets ? '$' + formatValue(totalAssets) : null
  const formattedTotalSafesDeployed = totalSafesDeployed ? formatValue(totalSafesDeployed) : null

  return [formattedTotalTransactions, formattedTotalAssets, formattedTotalSafesDeployed]
}
