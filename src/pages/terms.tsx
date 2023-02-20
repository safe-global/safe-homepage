import Head from 'next/head'
import type { NextPage } from 'next'

import { Terms } from '@/components/Terms'

const TermsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Safe – Terms and conditions</title>
      </Head>
      <Terms />
    </>
  )
}

export default TermsPage
