import { Core } from '@/components/Core'
import PageLayout from '@/components/common/PageLayout'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'

const CorePage: NextPageWithLayout = () => {
  return <Core />
}

CorePage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>
}

export default CorePage
