import type { NextPage } from 'next'
import { Licenses } from '@/components/Licenses'
import MetaTags from '@/components/common/MetaTags'

const LicensesPage: NextPage = () => {
  return (
    <>
      <MetaTags title="Safe – Licenses" />

      <Licenses />
    </>
  )
}

export default LicensesPage
