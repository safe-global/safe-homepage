import { type ReactElement } from 'react'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import SafenetLogo from '@/public/images/Safenet/Safenet-logo.svg'
import css from './styles.module.css'

const SafenetLayout = ({ children }: { children: ReactElement }): ReactElement => (
  <div className={css.container}>
    <Header AlternativeLogo={SafenetLogo} />

    {children}

    <Footer />
  </div>
)

export default SafenetLayout
