import { DUNE_API_KEY } from '@/config/constants'
import { duneQueryUrlBuilder } from '@/lib/duneQueryUrlBuilder'

const QUERY_ID_TOTAL_TRANSACTIONS = 2093960

export const fetchTotalTransactions = async (): Promise<number | null> => {
  return fetch(duneQueryUrlBuilder(QUERY_ID_TOTAL_TRANSACTIONS, DUNE_API_KEY))
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText)
      }

      return res.json()
    })
    .then((data) => data.result.rows[0].num_txs)
    .catch((err) => {
      console.error(`Error fetching total number of transactions: ${err.message}`)
      return null
    })
}
