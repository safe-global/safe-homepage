import PageContent from '@/components/common/PageContent'
import governanceContent from '@/content/governance.json'
import VotingDelegationContext from '@/contexts/VotingDelegationContext'
import type { getStaticProps } from '@/pages/governance'
import type { InferGetStaticPropsType } from 'next'

export const Governance = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <VotingDelegationContext.Provider value={props.votingDelegation}>
      <PageContent content={governanceContent} path="governance.json" />
    </VotingDelegationContext.Provider>
  )
}
