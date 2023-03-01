import type { InferGetStaticPropsType, NextPage } from 'next'
import { loadChainsData } from '@/lib/loadChainsData'
import { Home } from '@/components/Home'

const IndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return <Home {...props} />
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
