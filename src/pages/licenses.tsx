import Head from 'next/head'
import type { NextPage } from 'next'

import { Licenses } from '@/components/Licenses'

const LicensesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Safe – Licenses</title>
      </Head>
      <Licenses />
    </>
  )
}

export default LicensesPage
