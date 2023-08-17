import type { InferGetStaticPropsType, NextPage } from 'next'
import { loadChainsData } from '@/lib/loadChainsData'
import { Home } from '@/components/Home'
import { fetchTotalAssets, fetchTotalSafesDeployed, fetchTotalTransactions } from '@/hooks/useSafeStats'

const IndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return <Home {...props} />
}

export async function getStaticProps() {
  const chainsData = await loadChainsData()
  const totalTransactions = await fetchTotalTransactions()
  const totalAssets = await fetchTotalAssets()
  const totalSafesDeployed = await fetchTotalSafesDeployed()

  return {
    props: {
      chainsData,
      safeStatsData: {
        totalTransactions,
        totalAssets,
        totalSafesDeployed,
      },
    },
  }
}

export default IndexPage
