import type { NextPage } from 'next'
import { Privacy } from '@/components/Privacy'
import MetaTags from '@/components/common/MetaTags'

const PrivacyPage: NextPage = () => {
  return (
    <>
      <MetaTags title="Safe – Privacy" />

      <Privacy />
    </>
  )
}

export default PrivacyPage
