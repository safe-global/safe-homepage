import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'
import Safenet from '@/components/Safenet'
import SafenetLayout from '@/components/Safenet/Layout'

const SafenetPage: NextPageWithLayout = () => {
  return <Safenet />
}

SafenetPage.getLayout = function getLayout(page: ReactElement) {
  return <SafenetLayout>{page}</SafenetLayout>
}

export default SafenetPage
