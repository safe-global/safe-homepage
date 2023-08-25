import { useState } from 'react'
import { Badge, Button, ButtonBase } from '@mui/material'
import Link from 'next/link'

import { AppRoutes } from '@/config/routes'
import Logo from '@/public/images/logo.svg'
import { SAFECON_LINK, WALLET_LINK } from '@/config/constants'
import { useOpenPositions } from '@/hooks/useOpenPositions'
import css from './styles.module.css'
import clsx from 'clsx'
import { useRouter } from 'next/router'

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
  {
    label: 'Ecosystem',
    href: AppRoutes.ecosystem,
  },
  {
    label: 'Careers',
    href: AppRoutes.careers,
  },
]

const externalItems = [
  {
    label: (
      <>
        Safe <u>CON</u>
      </>
    ),
    href: SAFECON_LINK,
  },
  {
    label: 'Launch Wallet',
    href: WALLET_LINK,
  },
]

const Header = () => {
  const { asPath } = useRouter()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { data: positions = [] } = useOpenPositions()

  const toggleNavigation = () => {
    setIsOpen((prev) => !prev)
    document.body.classList.toggle('navOpen')
  }

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
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                className={clsx(css.link, item.href === asPath && css.active)}
                href={item.href}
                onClick={closeNavigation}
              >
                <Badge
                  badgeContent={item.href === AppRoutes.careers ? positions.length : undefined}
                  color="primary"
                  className={css.badge}
                  slotProps={{
                    badge: {
                      // @ts-expect-error - disable badge in search results
                      'data-nosnippet': true,
                    },
                  }}
                >
                  {item.label}
                </Badge>
              </Link>
            </li>
          ))}
          {externalItems.map((item) => (
            <li key={item.href}>
              <Button
                className={css.button}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
              >
                {item.label}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Header
