import type { InferGetStaticPropsType, NextPage } from 'next'
import { Governance } from '@/components/Governance'
import { fetchTotalDelegates } from '@/hooks/useVotingDelegation'

const GovernancePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return <Governance {...props} />
}

export async function getStaticProps() {
  const votingDelegation = await fetchTotalDelegates()
  const { delegate_unique, delegator_count } = votingDelegation || { delegate_unique: null, delegator_count: null }

  return {
    props: {
      votingDelegation: {
        totalDelegates: delegate_unique,
        totalDelegators: delegator_count,
      },
    },
  }
}

export default GovernancePage
