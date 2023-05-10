import type { ReactElement } from 'react'
import PageContent from '@/components/common/PageContent'
import ecosystemContent from '@/content/ecosystem.json'

export const Ecosystem = (): ReactElement => {
  return <PageContent content={ecosystemContent} path="ecosystem.json" />
}
