import type { InferGetStaticPropsType } from 'next'
import { Governance } from '@/components/Governance'
import { fetchTotalDelegates } from '@/hooks/useVotingDelegation'
import type { NextPageWithLayout } from '@/pages/_app'
import type { ReactElement } from 'react'
import PageLayout from '@/components/common/PageLayout'

const GovernancePage: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return <Governance {...props} />
}

GovernancePage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>
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
