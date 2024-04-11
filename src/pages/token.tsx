import type { InferGetStaticPropsType, NextPage } from 'next'
import Token from '@/components/Token'
import { loadChainsData } from '@/lib/loadChainsData'

const TokenPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return <Token />
}

export async function getStaticProps() {
  const chainsData = await loadChainsData()

  return {
    props: {
      chainsData,
    },
  }
}

export default TokenPage
