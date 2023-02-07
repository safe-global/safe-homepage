import type { ReactElement } from 'react'
import { homeContent } from '@/components/Home/content'
import PageContent from '../common/PageContent'

export const Home = (): ReactElement => {
  return <PageContent content={homeContent} />
}
