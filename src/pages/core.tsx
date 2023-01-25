import Head from 'next/head'
import type { NextPage } from 'next'

import { Core } from '@/components/Core'

const CorePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Safe {`{Core}`}</title>
      </Head>
      <Core />
    </>
  )
}

export default CorePage
