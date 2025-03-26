import { Agentathon } from '@/components/Agentathon'
import AgentathonLayout from '@/components/Agentathon/Layout'
import type { NextPageWithLayout } from '@/pages/_app'
import type { ReactElement } from 'react'

const AgentathonPage: NextPageWithLayout = () => {
  return <Agentathon />
}

AgentathonPage.getLayout = function getLayout(page: ReactElement) {
  return <AgentathonLayout>{page}</AgentathonLayout>
}

export default AgentathonPage
