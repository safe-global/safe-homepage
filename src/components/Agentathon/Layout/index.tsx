import { type ReactElement } from 'react'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

const AgentathonLayout = ({ children }: { children: ReactElement }): ReactElement => (
  <div>
    <Header />

    {children}

    <Footer />
  </div>
)

export default AgentathonLayout
