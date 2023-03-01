import type { InferGetStaticPropsType, NextPage } from 'next'
import { Wallet } from '@/components/Wallet'
import { loadChainsData } from '@/lib/loadChainsData'

const WalletPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return <Wallet {...props} />
}

export async function getStaticProps() {
  const chainsData = await loadChainsData()

  return {
    props: {
      chainsData,
    },
  }
}

export default WalletPage
