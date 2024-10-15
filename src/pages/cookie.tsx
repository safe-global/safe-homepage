import { Cookie } from '@/components/Cookie'
import PageLayout from '@/components/common/PageLayout'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'

const CookiePage: NextPageWithLayout = () => {
  return <Cookie />
}

CookiePage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>
}

export default CookiePage
