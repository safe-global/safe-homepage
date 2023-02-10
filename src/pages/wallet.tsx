import Head from 'next/head'
import type { InferGetStaticPropsType, NextPage } from 'next'
import { Wallet } from '@/components/Wallet'
import { CHAINS_URL } from '@/config/constants'
import type { ChainProps } from '@/components/common/Networks'

const WalletPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => (
  <>
    <Head>
      <title>Safe {`{Wallet}`}</title>
    </Head>
    <Wallet {...props} />
  </>
)

export async function getStaticProps() {
  const chainsData: ChainProps[] = await fetch(CHAINS_URL)
    .then((res) => res.json())
    .then(({ results }) => {
      return results.map(
        (
          chain: {
            chainName: string
            theme: { textColor: string; backgroundColor: string }
          } & Record<string, unknown>,
        ) => ({
          chainName: chain.chainName,
          textColor: chain.theme.textColor,
          backgroundColor: chain.theme.backgroundColor,
        }),
      )
    })

  return {
    props: {
      chainsData,
    },
  }
}

export default WalletPage
