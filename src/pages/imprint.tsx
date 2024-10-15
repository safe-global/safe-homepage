import { Imprint } from '@/components/Imprint'
import type { NextPageWithLayout } from '@/pages/_app'
import type { ReactElement } from 'react'
import PageLayout from '@/components/common/PageLayout'

const ImprintPage: NextPageWithLayout = () => {
  return <Imprint />
}

ImprintPage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>
}

export default ImprintPage
