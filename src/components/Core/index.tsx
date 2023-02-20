import type { ReactElement } from 'react'
import PageContent from '@/components/common/PageContent'
import coreContent from '@/content/core.json'

export const Core = (): ReactElement => {
  return <PageContent content={coreContent} />
}
