import type { NextPage } from 'next'
import { Core } from '@/components/Core'
import MetaTags from '@/components/common/MetaTags'

const CorePage: NextPage = () => {
  return (
    <>
      <MetaTags title="Safe Core – Full stack account abstraction" />

      <Core />
    </>
  )
}

export default CorePage
