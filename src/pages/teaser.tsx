import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'
import { Teaser } from '@/components/Teaser'

const TeaserPage: NextPageWithLayout = () => {
  return <Teaser />
}

TeaserPage.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>
}

export default TeaserPage
