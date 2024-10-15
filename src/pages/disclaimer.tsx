import { Disclaimer } from '@/components/Disclaimer'
import type { NextPageWithLayout } from '@/pages/_app'
import type { ReactElement } from 'react'
import PageLayout from '@/components/common/PageLayout'

const DisclaimerPage: NextPageWithLayout = () => {
  return <Disclaimer />
}

DisclaimerPage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>
}

export default DisclaimerPage
