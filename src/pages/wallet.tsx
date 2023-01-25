import Head from 'next/head'
import type { NextPage } from 'next'

import { Wallet } from '@/components/Wallet'

const WalletPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Safe {`{Wallet}`}</title>
      </Head>
      <Wallet />
    </>
  )
}

export default WalletPage
