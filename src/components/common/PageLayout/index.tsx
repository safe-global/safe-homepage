import { type ReactElement } from 'react'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import css from './styles.module.css'

const PageLayout = ({ children }: { children: ReactElement }): ReactElement => {
  return (
    <div className={css.container}>
      <Header />

      {children}

      <Footer />
    </div>
  )
}

export default PageLayout
