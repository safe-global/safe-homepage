import type { ReactElement } from 'react'
import PageContent from '@/components/common/PageContent'
import privacyContent from '@/content/privacy.json'

export const Privacy = (): ReactElement => {
  return <PageContent content={privacyContent} />
}
