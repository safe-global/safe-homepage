import { ButtonBase, Container, Divider, Grid, Typography } from '@mui/material'
import type { ComponentType, SyntheticEvent } from 'react'

import { AppRoutes } from '@/config/routes'
import DiscordIcon from '@/public/images/discord-icon.svg'
import XIcon from '@/public/images/x-icon.svg'
import YoutubeIcon from '@/public/images/youtube-icon.svg'
import DiscourseIcon from '@/public/images/discourse-icon.svg'
import MirrorIcon from '@/public/images/mirror-icon.svg'
import GithubIcon from '@/public/images/github-icon.svg'

import css from './styles.module.css'
import Link from 'next/link'
import {
  DOCS_LINK,
  HELP_LINK,
  CORE_LINK,
  PRESS_LINK,
  LICENSES_LINK,
  GOVERNANCE_LINK,
  ECOSYSTEM_LINK,
  GRANTS_LINK,
  SAFECON_LINK,
  DISCORD_LINK,
  FORUM_LINK,
  GITHUB_LINK,
  MIRROR_LINK,
  TWITTER_LINK,
  YOUTUBE_LINK,
} from '@/config/constants'
import { useCookieBannerContext } from '../CookieBanner/CookieBannerContext'
import Logo from '@/public/images/logo.svg'

const COOKIE_PREFERENCES = '#cookies'

const safeProtocolItems = [
  {
    label: 'Safe{Core}',
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
    label: 'Governance',
    href: GOVERNANCE_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    label: 'Ecosystem',
    href: ECOSYSTEM_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    label: 'Grants',
    href: GRANTS_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    label: 'Safe{Con}',
    href: SAFECON_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
]

const resourcesItems = [
  {
    label: 'Help Center',
    href: HELP_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    label: 'Careers',
    href: AppRoutes.careers,
  },
  {
    label: 'Brand Kit',
    href: PRESS_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
]

const subFooterItems = [
  {
    label: 'Terms',
    href: AppRoutes.terms,
  },
  {
    label: 'Privacy',
    href: AppRoutes.privacy,
  },
  {
    label: 'Licenses',
    href: LICENSES_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    label: 'Cookie Policy',
    href: AppRoutes.cookie,
  },
  {
    label: 'Preferences',
    href: COOKIE_PREFERENCES,
  },
  {
    label: 'Imprint',
    href: AppRoutes.imprint,
  },
]

const createFooterButton = (label: string, href: string, IconComponent: ComponentType) => {
  const buttonBaseAttributes = {
    disableRipple: true,
    target: '_blank',
    rel: 'noreferrer',
  }

  return (
    <ButtonBase {...buttonBaseAttributes} aria-label={label} href={href}>
      <IconComponent />
    </ButtonBase>
  )
}

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
            {createFooterButton('X page', TWITTER_LINK, XIcon)}
            {createFooterButton('Discourse forum', FORUM_LINK, DiscourseIcon)}
            {createFooterButton('Discord server', DISCORD_LINK, DiscordIcon)}
            {createFooterButton('Youtube channel', YOUTUBE_LINK, YoutubeIcon)}
            {createFooterButton('Mirror blog', MIRROR_LINK, MirrorIcon)}
            {createFooterButton('Github organization', GITHUB_LINK, GithubIcon)}
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
