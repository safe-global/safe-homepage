import Head from 'next/head'
import type { NextPage } from 'next'

import { Careers } from '@/components/Careers'
import Header from '@/components/common/Header'

const CareersPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Safe – Careers</title>
      </Head>
      <Header />
      <Careers />
    </>
  )
}

export default CareersPage
