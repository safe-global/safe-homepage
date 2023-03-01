import type { InferGetStaticPropsType, NextPage } from 'next'
import { Wallet } from '@/components/Wallet'
import { loadChainsData } from '@/lib/loadChainsData'
import MetaTags from '@/components/common/MetaTags'

const WalletPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => (
  <>
    <MetaTags title="Safe Wallet – Self-custodial multisig wallet for the Ethereum ecosystem" />

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
