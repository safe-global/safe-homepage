import { DUNE_API_KEY } from '@/config/constants'
import { duneQueryUrlBuilder } from '@/lib/duneQueryUrlBuilder'

const QUERY_ID_TOTAL_SAFES_DEPLOYED = 2459401

export const fetchTotalSafesDeployed = async (): Promise<number | null> => {
  return fetch(duneQueryUrlBuilder(QUERY_ID_TOTAL_SAFES_DEPLOYED, DUNE_API_KEY))
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText)
      }

      return res.json()
    })
    .then((data) => data.result.rows[0].num_safes)
    .catch((err) => {
      console.error(`Error fetching total safes deployed: ${err.message}`)
      return null
    })
}
