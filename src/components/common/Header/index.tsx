import { Button } from '@mui/material'
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
              <a className={css.link} href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <Button variant="contained">Launch Wallet</Button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
