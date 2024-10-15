import type { InferGetStaticPropsType } from 'next'
import { Wallet } from '@/components/Wallet'
import { loadChainsData } from '@/lib/loadChainsData'
import type { NextPageWithLayout } from '@/pages/_app'
import type { ReactElement } from 'react'
import PageLayout from '@/components/common/PageLayout'

const WalletPage: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return <Wallet {...props} />
}

WalletPage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>
}

export async function getStaticProps() {
  const chainsData = await loadChainsData()

  return {
    props: {
      chainsData,
    },
  }
}

export default WalletPage
