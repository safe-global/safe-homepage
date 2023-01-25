import Head from 'next/head'
import type { NextPage } from 'next'

import { Home } from '@/components/Home'
import Header from "@/components/common/Header";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Safe</title>
      </Head>
      <Header />
      <Home />
    </>
  )
}

export default IndexPage
