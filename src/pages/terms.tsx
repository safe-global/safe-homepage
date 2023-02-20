import Head from 'next/head'
import type { NextPage } from 'next'

import { Terms } from '@/components/Terms'

const TermsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions</title>
      </Head>
      <Terms />
    </>
  )
}

export default TermsPage
