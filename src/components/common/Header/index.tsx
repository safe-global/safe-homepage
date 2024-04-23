import { useState } from 'react'
import { Button, ButtonBase } from '@mui/material'
import Link from 'next/link'

import { AppRoutes } from '@/config/routes'
import Logo from '@/public/images/logo.svg'
import { WALLET_LINK } from '@/config/constants'
import css from './styles.module.css'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import navItemsData from '@/content/navItems.json'
import SafeLink from '@/components/common/SafeLink'
import ArrowIcon from '@/public/images/arrow-out-square-corner.svg'

type NavItemType = {
  label: string | JSX.Element
  href: string
  external?: boolean
}

const safePassButton = (
  <div className={css.externalLink}>
    Safe
    <u>PASS</u>
    <ArrowIcon />
  </div>
)

const navItems: NavItemType[] = [...navItemsData, { label: safePassButton, href: AppRoutes.pass }]

const externalLinkAttrs = {
  target: '_blank',
  rel: 'noopener noreferrer',
}

const Header = () => {
  const { asPath } = useRouter()
  const [isOpen, setIsOpen] = useState<boolean>(false)

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
                {...(item.external ? externalLinkAttrs : {})}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <SafeLink href={WALLET_LINK}>
              <Button className={css.button} variant="contained">
                Launch Wallet
              </Button>
            </SafeLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
