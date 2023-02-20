import type { ReactElement } from 'react'
import PageContent from '@/components/common/PageContent'
import { privacyContent } from '@/components/Privacy/content'

export const Privacy = (): ReactElement => {
  return <PageContent content={privacyContent} />
}
