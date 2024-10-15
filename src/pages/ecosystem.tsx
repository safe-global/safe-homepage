import { Ecosystem } from '@/components/Ecosystem'
import { ECOSYSTEM_SWR_KEY, type EcosystemProject, fetchEcosystemData } from '@/hooks/useEcosystemData'
import { SWRConfig } from 'swr/_internal'
import PageLayout from '@/components/common/PageLayout'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'

type Props = {
  data: EcosystemProject[]
}

const EcosystemPage: NextPageWithLayout<Props> = ({ data }) => {
  return (
    <SWRConfig
      value={{
        fallback: {
          [ECOSYSTEM_SWR_KEY]: data,
        },
      }}
    >
      <Ecosystem />
    </SWRConfig>
  )
}

EcosystemPage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>
}

export async function getStaticProps() {
  const data = await fetchEcosystemData()

  return {
    props: {
      data,
    },
  }
}

export default EcosystemPage
