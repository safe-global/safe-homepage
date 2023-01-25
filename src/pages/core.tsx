import Head from 'next/head'
import type { NextPage } from 'next'

import { Core } from '@/components/Core'
import Header from '@/components/common/Header'

const CorePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Safe {`{Core}`}</title>
      </Head>
      <Header />
      <Core />
    </>
  )
}

export default CorePage
