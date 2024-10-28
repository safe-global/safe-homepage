import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'
import { Alpha } from '@/components/Alpha'
import AlphaLayout from '@/components/Alpha/Layout'

const AlphaPage: NextPageWithLayout = () => {
  return <Alpha />
}

AlphaPage.getLayout = function getLayout(page: ReactElement) {
  return <AlphaLayout>{page}</AlphaLayout>
}

export default AlphaPage
