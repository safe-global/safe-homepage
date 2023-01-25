import type { ReactElement } from 'react'

import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

const PageLayout = ({ children }: { children: ReactElement }): ReactElement => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default PageLayout
