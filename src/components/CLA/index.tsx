import type { ReactElement } from 'react'

import PageContent from '@/components/common/PageContent'
import CLAContent from '@/content/cla.json'

export const CLA = (): ReactElement => {
  return <PageContent content={CLAContent} path="cla.json" />
}
