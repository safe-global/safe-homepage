import { DUNE_API_KEY } from '@/config/constants'
import { duneQueryUrlBuilder } from '@/lib/duneQueryUrlBuilder'

const QUERY_ID_MONTHLY_ACTIVE_USERS = 4151164

export const fetchMonthlyActiveUsers = async (): Promise<number | null> => {
  return fetch(duneQueryUrlBuilder(QUERY_ID_MONTHLY_ACTIVE_USERS, DUNE_API_KEY))
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText)
      }

      return res.json()
    })
    .then((data) => data.result.rows[data.result.rows.length - 1].active_users)
    .catch((err) => {
      console.error(`Error fetching monthly active users: ${err.message}`)
      return null
    })
}
