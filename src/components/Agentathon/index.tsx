import type { ReactElement } from 'react'
import PageContent from '@/components/common/PageContent'
import agentathonContent from '@/content/agentathon.json'

export const Agentathon = (): ReactElement => {
  return <PageContent content={agentathonContent} path="agentathon.json" />
}
