import { useState } from 'react'
import { Button, ButtonBase } from '@mui/material'
import Link from 'next/link'
import clsx from 'clsx'

import { AppRoutes } from '@/config/routes'
import { WALLET_LINK } from '@/config/constants'
import SafeLink from '@/components/common/SafeLink'
import { navCategories } from '@/components/common/Header/navCategories'
import Logo from '@/public/images/logo.svg'
import css from './styles.module.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleNavigation = () => {
    setIsOpen((prev) => !prev)
    document.body.classList.toggle('navOpen')
  }

  // TODO: attach to the sub items click
  const closeNavigation = () => {
    setIsOpen(false)
    document.body.classList.remove('navOpen')
  }

  return (
    <div className={clsx(css.header, isOpen && css.visible)}>
      <div className={css.logo}>
        <Link href={AppRoutes.index}>
          <Logo />
        </Link>
      </div>

      <ButtonBase className={css.burger} onClick={toggleNavigation} aria-label="Toggle navigation" disableRipple>
        <span />
      </ButtonBase>
      <nav>
        <ul className={css.navigation}>
          {navCategories.map((item) => (
            <li key={item.category}>
              <ButtonBase className={css.item} disableRipple>
                {item.category}
              </ButtonBase>
            </li>
          ))}
          <li className={css.navWalletButton}>
            <SafeLink href={WALLET_LINK}>
              <Button className={css.button} variant="contained">
                Launch Wallet
              </Button>
            </SafeLink>
          </li>
        </ul>
      </nav>

      <div className={css.outerWalletButton}>
        <SafeLink href={WALLET_LINK}>
          <Button className={css.button} variant="contained">
            Launch Wallet
          </Button>
        </SafeLink>
      </div>
    </div>
  )
}

export default Header
