import type { NextPage } from 'next'
import { Cookie } from '@/components/Cookie'
import MetaTags from '@/components/common/MetaTags'

const CookiePage: NextPage = () => {
  return (
    <>
      <MetaTags title="Safe – Cookie Policy" />

      <Cookie />
    </>
  )
}

export default CookiePage
