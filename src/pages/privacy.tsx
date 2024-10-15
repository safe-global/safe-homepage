import { Privacy } from '@/components/Privacy'
import type { NextPageWithLayout } from '@/pages/_app'
import type { ReactElement } from 'react'
import PageLayout from '@/components/common/PageLayout'

const PrivacyPage: NextPageWithLayout = () => {
  return <Privacy />
}

PrivacyPage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>
}

export default PrivacyPage
