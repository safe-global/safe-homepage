import { DUNE_API_KEY } from '@/config/constants'
import VotingDelegationContext from '@/contexts/VotingDelegationContext'
import { duneQueryUrlBuilder } from '@/lib/duneQueryUrlBuilder'
import { formatValue } from '@/lib/formatValue'
import { useContext } from 'react'

const QUERY_ID_TOTAL_DELEGATIONS = 3407074

export const fetchTotalDelegates = async (): Promise<{ delegate_unique: number; delegator_count: number } | null> => {
  return fetch(duneQueryUrlBuilder(QUERY_ID_TOTAL_DELEGATIONS, DUNE_API_KEY))
    .then((res) => res.json())
    .then((data) => data.result.rows[0])
    .catch(() => null)
}

export const useVotingDelegation = (): Array<string | null> => {
  const { totalDelegates, totalDelegators } = useContext(VotingDelegationContext)

  const formattedTotalDelegates = totalDelegates ? formatValue(totalDelegates) : null
  const formattedTotalDelegators = totalDelegators ? formatValue(totalDelegators) : null

  return [formattedTotalDelegates, formattedTotalDelegators]
}
