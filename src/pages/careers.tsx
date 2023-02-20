import Head from 'next/head'
import type { InferGetStaticPropsType, NextPage } from 'next'
import { SWRConfig } from 'swr'
import { Careers } from '@/components/Careers'
import { fetchOpenPositions, SWR_KEY } from '@/hooks/useOpenPositions'

const CareersPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return (
    <>
      <Head>
        <title>Safe – Careers</title>
      </Head>

      <SWRConfig value={{ fallback: props.fallback }}>
        <Careers />
      </SWRConfig>
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      fallback: {
        [SWR_KEY]: await fetchOpenPositions(),
      },
    },
  }
}

export default CareersPage
