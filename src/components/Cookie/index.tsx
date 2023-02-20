import type { ReactElement } from 'react'

import PageContent from '@/components/common/PageContent'
import cookiePolicyContent from '@/content/cookie-policy.json'

export const Cookie = (): ReactElement => {
  return <PageContent content={cookiePolicyContent} />
}
