import { Trademark } from '@/components/Trademark'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'
import PageLayout from '@/components/common/PageLayout'

const TrademarkPage: NextPageWithLayout = () => {
  return <Trademark />
}

TrademarkPage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>
}

export default TrademarkPage
