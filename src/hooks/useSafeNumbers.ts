import useSWR from 'swr'
import { formatValue } from '@/lib/formatValue'
import { DUNE_API_KEY } from '@/config/constants'

const QUERY_ID_TOTAL_TRANSACTIONS = 2093960
const QUERY_ID_TOTAL_ASSETS = 2893829
const QUERY_ID_TOTAL_SAFES_DEPOLOYED = 2459401

const fallbackStats = ['16M', '$56B', '4.3M']

const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => data.result.rows[0])

function totalAssetsEndpoint(queryId: number): string {
  return `https://api.dune.com/api/v1/query/${queryId}/results?api_key=${DUNE_API_KEY}`
}

export const useSafeNumbers = (): Array<string> => {
  const { data: totalTransactions, isLoading: isLoadingTransactions } = useSWR(
    totalAssetsEndpoint(QUERY_ID_TOTAL_TRANSACTIONS),
    fetcher,
  )
  const { data: totalAssets, isLoading: isLoadingAssets } = useSWR(totalAssetsEndpoint(QUERY_ID_TOTAL_ASSETS), fetcher)
  const { data: totalSafesDeployed, isLoading: isLoadingSafesDeployed } = useSWR(
    totalAssetsEndpoint(QUERY_ID_TOTAL_SAFES_DEPOLOYED),
    fetcher,
  )

  if (isLoadingTransactions || isLoadingAssets || isLoadingSafesDeployed) {
    return fallbackStats
  }

  const formattedTotalAssets = '$' + formatValue(totalAssets.usd_value)
  const formattedTotalSafesDeployed = formatValue(totalSafesDeployed.num_safes)
  const formattedTotalTransactions = formatValue(totalTransactions.num_txs)

  return [formattedTotalTransactions, formattedTotalAssets, formattedTotalSafesDeployed]
}
