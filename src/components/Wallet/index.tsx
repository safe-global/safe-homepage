import walletContent from '@/content/wallet.json'
import type { getStaticProps } from '@/pages/wallet'
import type { InferGetStaticPropsType } from 'next'
import ChainsContext from '../common/ChainsContext'
import PageContent from '../common/PageContent'

export const Wallet = (props: InferGetStaticPropsType<typeof getStaticProps>) => (
  <ChainsContext.Provider value={props.chainsData}>
    <PageContent content={walletContent} />
  </ChainsContext.Provider>
)
