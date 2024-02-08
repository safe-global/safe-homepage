import { createContext } from 'react'

type VotingDelegation = {
  totalDelegates: number | null
  totalDelegators: number | null
}

const VotingDelegationContext = createContext<VotingDelegation>({
  totalDelegates: null,
  totalDelegators: null,
})

export default VotingDelegationContext
