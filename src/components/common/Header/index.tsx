import { useState } from 'react'
import { Button, ButtonBase } from '@mui/material'
import Link from 'next/link'

import { AppRoutes } from '@/config/routes'
import Logo from '@/public/images/logo.svg'
import { WALLET_LINK } from '@/config/constants'
import css from './styles.module.css'
import clsx from 'clsx'

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
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleNavigation = () => {
    setIsOpen((prev) => !prev)
  }

  const closeNavigation = () => {
    setIsOpen(false)
  }

  return (
    <div className={clsx(css.header, isOpen && css.visible)}>
      <div className={css.logo}>
        <Logo />
      </div>
      <ButtonBase className={css.burger} onClick={toggleNavigation} aria-label="Toggle navigation" disableRipple>
        <span />
      </ButtonBase>
      <nav>
        <ul className={css.navigation}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link className={css.link} href={item.href} onClick={closeNavigation}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Button
              className={css.button}
              href={WALLET_LINK}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
            >
              Launch Wallet
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
