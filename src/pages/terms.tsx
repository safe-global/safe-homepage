import type { NextPage } from 'next'
import { Terms } from '@/components/Terms'
import MetaTags from '@/components/common/MetaTags'

const TermsPage: NextPage = () => {
  return (
    <>
      <MetaTags title="Safe – Terms and Conditions" />

      <Terms />
    </>
  )
}

export default TermsPage
