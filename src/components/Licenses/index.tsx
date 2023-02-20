import type { ReactElement } from 'react'
import PageContent from '@/components/common/PageContent'
import licensesContent from '@/content/licenses.json'

export const Licenses = (): ReactElement => {
  return <PageContent content={licensesContent} />
}
