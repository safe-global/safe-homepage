import type { ReactElement } from 'react'
import PageContent from '@/components/common/PageContent'
import trademarkContent from '@/content/trademark.json'

export const Trademark = (): ReactElement => {
  return <PageContent content={trademarkContent} path="trademark.json" />
}
