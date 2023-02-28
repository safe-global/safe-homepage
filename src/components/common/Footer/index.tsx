import { ButtonBase, Container, Divider, Grid, Typography } from '@mui/material'
import type { SyntheticEvent } from 'react'

import { AppRoutes } from '@/config/routes'
import DiscordIcon from '@/public/images/discord-icon.svg'
import TwitterIcon from '@/public/images/twitter-icon.svg'
import MirrorIcon from '@/public/images/mirror-icon.svg'
import GithubIcon from '@/public/images/github-icon.svg'

import css from './styles.module.css'
import Link from 'next/link'
import {
  DOCS_LINK,
  HELP_LINK,
  PRESS_LINK,
  CORE_LINK,
  FORUM_LINK,
  CHAT_LINK,
  GUARDIANS_LINK,
  BRAND_KIT,
} from '@/config/constants'
import { useCookieBannerContext } from '../CookieBanner/CookieBannerContext'
import Logo from '@/public/images/logo.svg'

const COOKIE_PREFERENCES = '#cookies'

const safeProtocolItems = [
  {
    label: 'Core',
    href: CORE_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    label: 'Developer Docs',
    href: DOCS_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
]

const communityItems = [
  {
    label: 'Safe DAO',
    href: FORUM_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    label: 'Discord',
    href: CHAT_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    label: 'Safe Guardians',
    href: GUARDIANS_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
]

const resourcesItems = [
  {
    label: 'Careers',
    href: AppRoutes.careers,
  },
  {
    label: 'Help Center',
    href: HELP_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    label: 'Brand Kit',
    href: BRAND_KIT,
    target: '_blank',
    rel: 'noreferrer',
  },
]

const subFooterItems = [
  {
    label: 'Press Kit',
    href: PRESS_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    label: 'Licenses',
    href: AppRoutes.licenses,
  },
  {
    label: 'Imprint',
    href: AppRoutes.imprint,
  },
  {
    label: 'Preferences',
    href: COOKIE_PREFERENCES,
  },
]

const Footer = () => {
  const { openBanner } = useCookieBannerContext()

  const showBanner = (e: SyntheticEvent) => {
    // Prevent opening the hash link
    e.preventDefault()
    openBanner()
  }

  return (
    <Container>
      <Grid container flexDirection={{ xs: 'column', sm: 'row' }}>
        <Grid item xs={12} md={3} mb={{ xs: 4, md: 0 }}>
          <Link href={AppRoutes.index}>
            <Logo className={css.logo} />
          </Link>
        </Grid>

        <Grid item sm={6} md={2}>
          <Typography variant="caption" color="text.primary">
            Safe Core Protocol
          </Typography>
          <ul className={css.list}>
            {safeProtocolItems.map((item) => (
              <li className={css.listItem} key={item.href}>
                <Link href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>

        <Grid item sm={6} md={2}>
          <Typography variant="caption" color="text.primary">
            Community
          </Typography>
          <ul className={css.list}>
            {communityItems.map((item) => (
              <li className={css.listItem} key={item.href}>
                <Link href={item.href} target={item.target} rel={item.rel}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>

        <Grid item sm={6} md={2}>
          <Typography variant="caption" color="text.primary">
            Resources
          </Typography>
          <ul className={css.list}>
            {resourcesItems.map((item) => (
              <li className={css.listItem} key={item.href}>
                <Link href={item.href} target={item.target} rel={item.rel}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>

        <Grid item xs={12} md={3} mt={{ xs: 6, md: 0 }}>
          <div className={css.socials}>
            <ButtonBase
              disableRipple
              aria-label="Twitter link"
              href="https://twitter.com/safe"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
            </ButtonBase>
            <ButtonBase
              disableRipple
              aria-label="Mirror link"
              href="https://safe.mirror.xyz"
              target="_blank"
              rel="noreferrer"
            >
              <MirrorIcon />
            </ButtonBase>
            <ButtonBase
              disableRipple
              aria-label="Discord link"
              href="https://chat.safe.global"
              target="_blank"
              rel="noreferrer"
            >
              <DiscordIcon />
            </ButtonBase>
            <ButtonBase
              disableRipple
              aria-label="Github link"
              href="https://github.com/safe-global"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
            </ButtonBase>
          </div>
        </Grid>
      </Grid>

      <Divider sx={{ mt: 5, mb: { xs: 3, md: 0 } }} />

      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <ul className={css.subList}>
            {subFooterItems.map((item) => {
              const isCookiePreference = item.href === COOKIE_PREFERENCES

              return (
                <li className={css.subListItem} key={item.href}>
                  <Link
                    href={item.href}
                    target={item.target}
                    rel={item.rel}
                    onClick={isCookiePreference ? showBanner : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </Grid>

        <Grid item my={2}>
          <Typography color="primary.light" fontSize="16px">
            ©{new Date().getFullYear()} Safe Ecosystem Foundation
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer
