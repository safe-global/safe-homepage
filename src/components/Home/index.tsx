import homeContent from '@/content/home.json'
import type { getStaticProps } from '@/pages/index'
import type { InferGetStaticPropsType } from 'next'
import ChainsContext from '../common/ChainsContext'
import PageContent from '../common/PageContent'
import SafeStatsContext from '@/components/common/SafeStatsContext'

export const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => (
  <SafeStatsContext.Provider value={props.safeStatsData}>
    <ChainsContext.Provider value={props.chainsData}>
      <PageContent content={homeContent} path="home.json" />
    </ChainsContext.Provider>
  </SafeStatsContext.Provider>
)
