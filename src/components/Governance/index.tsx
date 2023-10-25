import PageContent from '@/components/common/PageContent'
import governanceContent from '@/content/governance.json'

export const Governance = () => {
  return <PageContent content={governanceContent} path="governance.json" />
}
