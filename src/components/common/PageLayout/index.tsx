import { type ReactElement } from 'react'
import Header from '@/components/common/Header'
import HeaderCampaigns from '@/components/common/HeaderCampaigns'
import Footer from '@/components/common/Footer'
import css from './styles.module.css'
import { useRouter } from 'next/router'

const PageLayout = ({ children }: { children: ReactElement }): ReactElement => {
  const router = useRouter()

  const selectHeader = () => {
    const isCampaignsPage = router.pathname.startsWith('/campaigns')

    return isCampaignsPage ? <HeaderCampaigns /> : <Header />
  }

  return (
    <div className={css.container}>
      {selectHeader()}

      {children}

      <Footer />
    </div>
  )
}

export default PageLayout
