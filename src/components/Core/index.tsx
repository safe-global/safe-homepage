import type { ReactElement } from 'react'
import PageContent from '@/components/common/PageContent'
import { coreContent } from '@/components/Core/content'

export const Core = (): ReactElement => {
  return <PageContent content={coreContent} />
}
