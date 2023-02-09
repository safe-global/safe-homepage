import type { ReactElement } from 'react'

import PageContent from '@/components/common/PageContent'
import { careersContent } from '@/components/Careers/content'

export const Careers = (): ReactElement => {
  return <PageContent content={careersContent} />
}
