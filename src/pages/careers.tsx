import { Careers } from '@/components/Careers'
import PageLayout from '@/components/common/PageLayout'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'

const CareersPage: NextPageWithLayout = () => {
  return <Careers />
}

CareersPage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>
}

export default CareersPage
