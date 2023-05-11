import type { NextPage } from 'next'
import { Ecosystem } from '@/components/Ecosystem'
import { ECOSYSTEM_SWR_KEY, type EcosystemProject, fetchEcosystemData } from '@/hooks/useEcosystemData'
import { SWRConfig } from 'swr/_internal'

type Props = {
  data: EcosystemProject[]
}

const EcosystemPage: NextPage<Props> = ({ data }) => {
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

export async function getStaticProps() {
  const data = await fetchEcosystemData()

  return {
    props: {
      data,
    },
  }
}

export default EcosystemPage
