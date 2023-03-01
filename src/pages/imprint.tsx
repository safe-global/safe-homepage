import type { NextPage } from 'next'
import { Imprint } from '@/components/Imprint'
import MetaTags from '@/components/common/MetaTags'

const ImprintPage: NextPage = () => {
  return (
    <>
      <MetaTags title="Safe – Imprint" />

      <Imprint />
    </>
  )
}

export default ImprintPage
