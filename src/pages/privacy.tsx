import Head from 'next/head'
import type { NextPage } from 'next'

import { Privacy } from '@/components/Privacy'

const PrivacyPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Privacy policy</title>
      </Head>
      <Privacy />
    </>
  )
}

export default PrivacyPage
