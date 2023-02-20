import Head from 'next/head'
import type { NextPage } from 'next'

import { Cookie } from '@/components/Cookie'

const CookiePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Safe – Cookie Policy</title>
      </Head>
      <Cookie />
    </>
  )
}

export default CookiePage
