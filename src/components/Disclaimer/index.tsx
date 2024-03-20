import type { ReactElement } from 'react'
import PageContent from '@/components/common/PageContent'
import disclaimerContent from '@/content/disclaimer.json'

export const Disclaimer = (): ReactElement => {
  return <PageContent content={disclaimerContent} path="disclaimer.json" />
}
