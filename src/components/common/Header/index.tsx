import { Button } from '@mui/material'
import Link from 'next/link'
import Logo from '@/public/images/logo.svg'
import css from './styles.module.css'
import { AppRoutes } from '@/config/routes'

const navItems = [
  {
    label: 'Home',
    href: AppRoutes.index,
  },
  {
    label: 'Core',
    href: AppRoutes.core,
  },
  {
    label: 'Wallet',
    href: AppRoutes.wallet,
  },
]

const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.logo}>
        <Logo />
      </div>
      <nav>
        <ul className={css.navigation}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link className={css.link} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Button href="https://app.safe.global" target="_blank" variant="contained">
              Launch Wallet
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
