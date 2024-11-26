import type { InferGetStaticPropsType, NextPage } from 'next'
import client from '@/lib/contentful'
import { Wallet } from '@/components/Wallet'
import type { TypeBaseBlockSkeleton } from '@/contentful/types'

const FAQ_CONTENT_TYPE_ID = '1jCIVFDUzFO1okK8b6TTxS'

const WalletPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => <Wallet {...props} />

export async function getStaticProps() {
  const faqContent = await client.getEntry<TypeBaseBlockSkeleton>(FAQ_CONTENT_TYPE_ID)

  return { props: { pageData: { faqContent } } }
}

export default WalletPage
