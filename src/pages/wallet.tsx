import Head from 'next/head'
import type { NextPage } from 'next'

import { Wallet } from '@/components/Wallet'
import Header from '@/components/common/Header'

const WalletPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Safe {`{Wallet}`}</title>
      </Head>
      <Header />
      <Wallet />
    </>
  )
}

export default WalletPage
