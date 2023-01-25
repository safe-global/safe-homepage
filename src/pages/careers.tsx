import Head from 'next/head'
import type { NextPage } from 'next'

import { Careers } from '@/components/Careers'

const CareersPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Safe – Careers</title>
      </Head>
      <Careers />
    </>
  )
}

export default CareersPage
