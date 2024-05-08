import { createRef, useEffect, useState } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  ButtonBase,
  Fade,
  Paper,
  Popper,
  Typography,
  useMediaQuery,
} from '@mui/material'
import NextLink from 'next/link'
import clsx from 'clsx'

import { AppRoutes } from '@/config/routes'
import { WALLET_LINK } from '@/config/constants'
import SafeLink from '@/components/common/SafeLink'
import Menu from '@/components/common/Header/Menu'
import { navCategories, type NavCategoriesType } from '@/components/common/Header/navCategories'
import Logo from '@/public/images/logo.svg'
import AngleDownIcon from '@/public/images/angle-down.svg'
import css from './styles.module.css'

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false)
  const [subMenuOpen, setSubMenuOpen] = useState<null | NavCategoriesType>(null)
  const [elRefs, setElRefs] = useState<(React.RefObject<HTMLButtonElement> | null)[]>([])
  const isSmallScreen = useMediaQuery('(max-width:600px)')

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

  const toggleNavigation = () => {
    setIsBurgerOpen((prev) => !prev)
    document.body.classList.toggle('navOpen')
  }

  const closeNavigation = () => {
    document.body.classList.remove('navOpen')
    setIsBurgerOpen(false)
    setSubMenuOpen(null)
  }

  const isOpen = subMenuOpen !== null

  return (
    <div className={clsx(css.header, isBurgerOpen && css.visible)}>
      <NextLink href={AppRoutes.index}>
        <div className={css.logo}>
          <Logo />
        </div>
      </NextLink>

      <ButtonBase className={css.burger} onClick={toggleNavigation} aria-label="Toggle navigation" disableRipple>
        <span />
      </ButtonBase>
      <nav>
        <ul className={css.navigation}>
          {navCategories.map(({ category, items, href }, index) => (
            <>
              <li
                key={category}
                onMouseEnter={toggleCategoryOpen(category)}
                onFocus={toggleCategoryOpen(category)}
                onMouseLeave={toggleCategoryOpen(null)}
                onBlur={toggleCategoryOpen(null)}
              >
                {href ? (
                  <NextLink href={href}>
                    <div className={css.navLink}>{category}</div>
                  </NextLink>
                ) : isSmallScreen ? (
                  // Mobile button
                  <Accordion className={clsx(css.accordion, css.hideInLaptop)}>
                    <AccordionSummary expandIcon={<AngleDownIcon />}>
                      <div className={css.categoryTitle}>{category}</div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Menu items={items ?? []} onItemClick={closeNavigation} />
                    </AccordionDetails>
                  </Accordion>
                ) : (
                  // Desktop button
                  <ButtonBase
                    className={clsx(css.navButton, css.hideInMobile, { [css.active]: subMenuOpen === category })}
                    disableRipple
                    id={`${category}-button`}
                    aria-haspopup
                    aria-controls={`${category}-popper`}
                    aria-expanded={isOpen}
                    ref={elRefs[index]}
                  >
                    <Typography>{category}</Typography>
                    <Popper
                      className={css.hideInMobile}
                      id={`${category}-popper`}
                      open={subMenuOpen === category}
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
                            <Menu items={items ?? []} onItemClick={closeNavigation} />
                          </Paper>
                        </Fade>
                      )}
                    </Popper>
                  </ButtonBase>
                )}
              </li>
            </>
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
