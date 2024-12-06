import type { InferGetStaticPropsType, NextPage } from 'next'
import { loadChainsData } from '@/lib/loadChainsData'
import { Home } from '@/components/Home'
import { fetchTotalTransactions } from '@/lib/fetchTotalTransactions'
import { fetchTotalBalanceUsd } from '@/lib/fetchTotalBalanceUsd'
import { fetchTotalSafesDeployed } from '@/lib/fetchTotalSafesDeployed'

const IndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return <Home {...props} />
}

export async function getStaticProps() {
  const [chainsData, totalTransactions, totalBalanceUsd, totalSafesDeployed] = await Promise.all([
    loadChainsData(),
    fetchTotalTransactions(),
    fetchTotalBalanceUsd(),
    fetchTotalSafesDeployed(),
  ])

  return {
    props: {
      chainsData,
      safeStatsData: {
        totalTransactions,
        totalBalanceUsd,
        totalSafesDeployed,
      },
    },
  }
}

export default IndexPage
