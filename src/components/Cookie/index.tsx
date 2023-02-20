import type { ReactElement } from 'react'

import PageContent from '@/components/common/PageContent'
import { cookiesContent } from '@/components/Cookie/content'

export const Cookie = (): ReactElement => {
  return <PageContent content={cookiesContent} />
}
