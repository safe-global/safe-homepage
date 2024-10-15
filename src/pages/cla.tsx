import type { NextPageWithLayout } from '@/pages/_app'
import { CLA } from '@/components/CLA'
import type { ReactElement } from 'react'
import PageLayout from '@/components/common/PageLayout'

const CLAPage: NextPageWithLayout = () => {
  return <CLA />
}

CLAPage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>
}

export default CLAPage
