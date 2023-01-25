import Head from 'next/head'
import type { NextPage } from 'next'

import { Home } from '@/components/Home'

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Safe</title>
      </Head>
      <Home />
    </>
  )
}

export default IndexPage
