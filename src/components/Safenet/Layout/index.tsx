import { type ReactElement } from 'react'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import css from './styles.module.css'

const SafenetLayout = ({ children }: { children: ReactElement }): ReactElement => (
  <div className={css.container}>
    <Header customClass={css.transparentHeader} />

    {children}

    <Footer />
  </div>
)

export default SafenetLayout
