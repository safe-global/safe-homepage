import type { ReactElement } from 'react'
import type { InferGetStaticPropsType } from 'next'
import type { NextPageWithLayout } from '@/pages/_app'
import { loadChainsData } from '@/lib/loadChainsData'
import { Home } from '@/components/Home'
import { fetchTotalAssets, fetchTotalSafesDeployed, fetchTotalTransactions } from '@/hooks/useSafeStats'
import PageLayout from '@/components/common/PageLayout'

const IndexPage: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return <Home {...props} />
}

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>
}

export async function getStaticProps() {
  const [chainsData, totalTransactions, totalAssets, totalSafesDeployed] = await Promise.all([
    loadChainsData(),
    fetchTotalTransactions(),
    fetchTotalAssets(),
    fetchTotalSafesDeployed(),
  ])

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
