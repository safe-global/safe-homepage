import type { NextPage } from 'next'
import { Careers } from '@/components/Careers'
import MetaTags from '@/components/common/MetaTags'

const CareersPage: NextPage = () => {
  return (
    <>
      <MetaTags title="Jobs at Safe" />

      <Careers />
    </>
  )
}

export default CareersPage
