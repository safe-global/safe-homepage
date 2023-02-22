import Head from 'next/head'
import type { NextPage } from 'next'

import { Imprint } from '@/components/Imprint'

const ImprintPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Safe – Imprint</title>
      </Head>
      <Imprint />
    </>
  )
}

export default ImprintPage
