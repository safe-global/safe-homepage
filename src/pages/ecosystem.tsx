import type { NextPage } from 'next'
import { Ecosystem } from '@/components/Ecosystem'
import { type EcosystemProject, fetchEcosystemData } from '@/hooks/useEcosystemData'

type Props = {
  data: EcosystemProject[]
}

const EcosystemPage: NextPage<Props> = ({ data }) => {
  return <Ecosystem data={data} />
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
