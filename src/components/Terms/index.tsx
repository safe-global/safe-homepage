import type { ReactElement } from 'react'
import PageContent from '@/components/common/PageContent'
import termsContent from '@/content/terms.json'

export const Terms = (): ReactElement => {
  return <PageContent content={termsContent} path="terms.json" />
}
