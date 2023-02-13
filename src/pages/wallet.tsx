import Head from 'next/head'
import type { InferGetStaticPropsType, NextPage } from 'next'
import { Wallet } from '@/components/Wallet'
import { loadChainsData } from '@/lib/loadChainsData'

const WalletPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => (
  <>
    <Head>
      <title>Safe {`{Wallet}`}</title>
    </Head>
    <Wallet {...props} />
  </>
)

export async function getStaticProps() {
  const chainsData = await loadChainsData()

  return {
    props: {
      chainsData,
    },
  }
}

export default WalletPage
