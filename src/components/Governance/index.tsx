import type { ReactElement } from 'react'
import PageContent from '@/components/common/PageContent'
import governanceContent from '@/content/governance.json'

export const Governance = (): ReactElement => {
  return <PageContent content={governanceContent} path="governance.json" />
}
