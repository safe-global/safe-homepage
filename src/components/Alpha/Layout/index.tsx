import { type ReactElement } from 'react'
import HeaderLetter from '@/components/Alpha/Header'
import css from './styles.module.css'

const AlphaLayout = ({ children }: { children: ReactElement }): ReactElement => (
  <div className={css.container}>
    <HeaderLetter />

    {children}
  </div>
)

export default AlphaLayout
