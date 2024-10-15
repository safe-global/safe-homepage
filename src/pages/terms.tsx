import { Terms } from '@/components/Terms'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'
import PageLayout from '@/components/common/PageLayout'

const TermsPage: NextPageWithLayout = () => {
  return <Terms />
}

TermsPage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>
}

export default TermsPage
