import type { ReactElement } from 'react'
import PageContent from '@/components/common/PageContent'
import { termsContent } from '@/components/Terms/content'

export const Terms = (): ReactElement => {
  return <PageContent content={termsContent} />
}
