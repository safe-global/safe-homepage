import homeContent from '@/content/home.json'
import type { getStaticProps } from '@/pages/wallet'
import type { InferGetStaticPropsType } from 'next'
import ChainsContext from '../common/ChainsContext'
import PageContent from '../common/PageContent'

export const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => (
  <ChainsContext.Provider value={props.chainsData}>
    <PageContent content={homeContent} />
  </ChainsContext.Provider>
)
