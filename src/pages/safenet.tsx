import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'
import Safenet from '@/components/Safenet'
import SafenetLayout from '@/components/Safenet/Layout'
import Head from 'next/head'

const SafenetPage: NextPageWithLayout = () => {
  return (
    <>
      <Safenet />
      <Head>
        {/* Favicons */}
        <link rel="shortcut icon" href="/images/Safenet/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/Safenet/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/Safenet/favicons/favicon-16x16.png" />
      </Head>
    </>
  )
}

SafenetPage.getLayout = function getLayout(page: ReactElement) {
  return <SafenetLayout>{page}</SafenetLayout>
}

export default SafenetPage
