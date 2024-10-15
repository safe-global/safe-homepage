import { GasStation } from '@/components/GasStation'
import type { NextPageWithLayout } from '@/pages/_app'
import type { ReactElement } from 'react'
import PageLayout from '@/components/common/PageLayout'

const GasStationPage: NextPageWithLayout = () => {
  return <GasStation />
}

GasStationPage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>
}

export default GasStationPage
