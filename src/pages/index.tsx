import type { InferGetStaticPropsType, NextPage } from 'next'
import { loadChainsData } from '@/lib/loadChainsData'
import { Home } from '@/components/Home'
import MetaTags from '@/components/common/MetaTags'

const IndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return (
    <>
      <MetaTags title="Safe – Previously Gnosis Safe – Crypto wallet, web3 account abstraction developer stack" />

      <Home {...props} />
    </>
  )
}

export async function getStaticProps() {
  const chainsData = await loadChainsData()

  return {
    props: {
      chainsData,
    },
  }
}

export default IndexPage
