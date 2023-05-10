import type { ReactElement } from 'react'
import PageContent from '@/components/common/PageContent'
import ecosystemContent from '@/content/ecosystem.json'
import { type EcosystemProject } from '@/hooks/useEcosystemData'

export const Ecosystem = ({ data }: { data: EcosystemProject[] }): ReactElement => {
  return <PageContent content={ecosystemContent} path="ecosystem.json" initialData={data} />
}
