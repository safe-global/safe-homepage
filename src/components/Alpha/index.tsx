import type { ReactElement } from 'react'
import PageContent from '@/components/common/PageContent'
import alphaContent from '@/content/alpha.json'

export const Alpha = (): ReactElement => {
  return <PageContent content={alphaContent} path="alpha.json" />
}
