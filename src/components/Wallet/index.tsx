import type { InferGetStaticPropsType } from 'next'
import PageContent from '../common/PageContent'
import type { getStaticProps } from '@/pages/wallet'
import walletContent from '@/content/wallet.json'
import FaqContentContext from '@/contexts/FaqContentContext'

export const Wallet = ({ pageData }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <FaqContentContext.Provider value={pageData}>
    <PageContent content={walletContent} path="wallet.json" />
  </FaqContentContext.Provider>
)
