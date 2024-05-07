import { createRef, useEffect, useState } from 'react'
import { Button, ButtonBase, Fade, Paper, Popper, Typography } from '@mui/material'
import NextLink from 'next/link'
import clsx from 'clsx'

import { AppRoutes } from '@/config/routes'
import { WALLET_LINK } from '@/config/constants'
import SafeLink from '@/components/common/SafeLink'
import Menu from '@/components/common/Header/Menu'
import { navCategories, type NavCategoriesType } from '@/components/common/Header/navCategories'
import Logo from '@/public/images/logo.svg'
import css from './styles.module.css'

const Header = () => {
  // const [isOpen, setIsOpen] = useState<boolean>(false)

  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null)

  const [subMenuOpen, setSubMenuOpen] = useState<null | NavCategoriesType>(null)
  const [elRefs, setElRefs] = useState<(React.RefObject<HTMLButtonElement> | null)[]>([])

  // Initialize nav buttons refs
  useEffect(() => {
    if (elRefs.length > 0) return

    for (let i = 0; i < navCategories.length; i++) {
      setElRefs((prev) => [...prev, createRef()])
    }
  }, [elRefs.length])

  const toggleCategoryOpen = (value: typeof subMenuOpen) => () => {
    setSubMenuOpen(value)
  }

  // Burguer navigation
  const toggleNavigation = () => {
    // setIsOpen((prev) => !prev)
    document.body.classList.toggle('navOpen')
  }

  const closeNavigation = () => {
    // setIsOpen(false)
    document.body.classList.remove('navOpen')
  }
  //

  const isOpen = subMenuOpen !== null

  return (
    // <div className={clsx(css.header, isOpen && css.visible)}>
    <div className={clsx(css.header)}>
      <div className={css.logo}>
        <NextLink href={AppRoutes.index}>
          <Logo />
        </NextLink>
      </div>

      <ButtonBase className={css.burger} onClick={toggleNavigation} aria-label="Toggle navigation" disableRipple>
        <span />
      </ButtonBase>
      <nav>
        <ul className={css.navigation}>
          {navCategories.map((item, index) => (
            <li
              key={item.category}
              onMouseEnter={toggleCategoryOpen(item.category)}
              onFocus={toggleCategoryOpen(item.category)}
              onMouseLeave={toggleCategoryOpen(null)}
              onBlur={toggleCategoryOpen(null)}
            >
              <ButtonBase
                className={clsx(css.item, { [css.active]: subMenuOpen === item.category })}
                disableRipple
                id={`${item.category}-button`}
                aria-haspopup
                aria-controls={`${item.category}-popper`}
                aria-expanded={isOpen}
                ref={elRefs[index]}
              >
                <Typography>{item.category}</Typography>
              </ButtonBase>
              <Popper
                id={`${item.category}-popper`}
                open={subMenuOpen === item.category}
                anchorEl={elRefs[index]?.current}
                transition
                placement="bottom-start"
                style={{
                  zIndex: 1200,
                }}
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Paper className={css.menu}>
                      <Menu items={item.items} onItemClick={() => setSubMenuOpen(null)} />
                    </Paper>
                  </Fade>
                )}
              </Popper>
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
