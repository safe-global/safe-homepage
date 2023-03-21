import type { ReactElement } from 'react'

import PageContent from '@/components/common/PageContent'
import careersContent from '@/content/careers.json'

export const Careers = (): ReactElement => {
  return <PageContent content={careersContent} path="careers.json" />
}
