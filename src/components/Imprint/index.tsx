import type { ReactElement } from 'react'
import PageContent from '@/components/common/PageContent'
import imprintContent from '@/content/imprint.json'

export const Imprint = (): ReactElement => {
  return <PageContent content={imprintContent} />
}
