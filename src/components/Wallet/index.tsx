import walletContent from '@/content/wallet.json';
import type { getStaticProps } from '@/pages/wallet'
import type { InferGetStaticPropsType } from 'next'
import PageContent from '../common/PageContent'

export const Wallet = (props: InferGetStaticPropsType<typeof getStaticProps>) => (
  <PageContent content={walletContent} {...props} />
)
