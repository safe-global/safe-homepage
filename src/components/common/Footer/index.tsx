import { Badge, ButtonBase, Container, Divider, Grid, SvgIcon, Typography } from '@mui/material'
import type { ComponentType, SyntheticEvent } from 'react'

import { AppRoutes } from '@/config/routes'
import DiscordIcon from '@/public/images/discord-icon.svg'
import XIcon from '@/public/images/x-icon.svg'
import YoutubeIcon from '@/public/images/youtube-icon.svg'
import DiscourseIcon from '@/public/images/discourse-icon.svg'
import GithubIcon from '@/public/images/github-icon.svg'

import css from './styles.module.css'
import Link from 'next/link'
import {
  DOCS_LINK,
  HELP_LINK,
  PRESS_LINK,
  LICENSES_LINK,
  GRANTS_LINK,
  SAFECON_LINK,
  DISCORD_LINK,
  FORUM_LINK,
  GITHUB_LINK,
  TWITTER_LINK,
  YOUTUBE_LINK,
} from '@/config/constants'
import { useCookieBannerContext } from '@/contexts/CookieBannerContext'
import Logo from '@/public/images/logo.svg'
import { useOpenPositions } from '@/hooks/useOpenPositions'
import packageJson from 'package.json'

const COOKIE_PREFERENCES = '#cookies'

const developersItems = [
  {
    label: 'Safe{Core}',
    href: AppRoutes.core,
  },
  {
    label: 'Documentation',
    href: DOCS_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    label: 'Gas station',
    href: AppRoutes.gasStation,
  },
  {
    label: 'Safe{Foundry}',
    href: AppRoutes.foundry,
  },
]

const ecosystemItems = [
  {
    label: 'Explore',
    href: AppRoutes.ecosystem,
  },
  {
    label: 'Grants',
    href: GRANTS_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
]

const communityItems = [
  {
    label: 'Governance',
    href: AppRoutes.governance,
  },
  {
    label: 'Token',
    href: AppRoutes.token,
  },
  {
    label: 'Safe{Pass}',
    href: AppRoutes.pass,
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
    label: 'Careers',
    href: AppRoutes.careers,
  },
  {
    label: 'Press Room',
    href: AppRoutes.press,
  },
  {
    label: 'Brand Kit',
    href: PRESS_LINK,
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    label: 'Help Center',
    href: HELP_LINK,
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
  {
    label: 'Trademark',
    href: AppRoutes.trademark,
  },
  {
    label: 'Disclaimer',
    href: AppRoutes.disclaimer,
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
  const { data: positions = [] } = useOpenPositions()

  const showBanner = (e: SyntheticEvent) => {
    // Prevent opening the hash link
    e.preventDefault()
    openBanner()
  }

  return (
    <Container className={css.wrapper}>
      <Grid container flexDirection={{ xs: 'column', sm: 'row' }}>
        <Grid item xs={12} md={2.5} mb={{ xs: 4, md: 0 }}>
          <Link href={AppRoutes.index}>
            <Logo className={css.logo} />
          </Link>
        </Grid>

        <Grid item xs={6} md={2}>
          <Typography variant="caption" color="text.primary">
            Developers
          </Typography>
          <ul className={css.list}>
            {developersItems.map((item) => (
              <li className={css.listItem} key={item.href}>
                <Link href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>

        <Grid item xs={6} md={2}>
          <Typography variant="caption" color="text.primary">
            Ecosystem
          </Typography>
          <ul className={css.list}>
            {ecosystemItems.map((item) => (
              <li className={css.listItem} key={item.href}>
                <Link href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>

        <Grid item xs={6} md={2}>
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

        <Grid item xs={6} md={2}>
          <Typography variant="caption" color="text.primary">
            Resources
          </Typography>
          <ul className={css.list}>
            {resourcesItems.map((item) => (
              <li className={css.listItem} key={item.href}>
                <Link href={item.href} target={item.target} rel={item.rel}>
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
          </ul>
        </Grid>

        <Grid item xs={6} md={1.5}>
          <Typography variant="caption" color="text.primary">
            Follow us
          </Typography>
          <div className={css.socials}>
            {createFooterButton('X page', TWITTER_LINK, XIcon)}
            {createFooterButton('Discourse forum', FORUM_LINK, DiscourseIcon)}
            {createFooterButton('Discord server', DISCORD_LINK, DiscordIcon)}
            {createFooterButton('Youtube channel', YOUTUBE_LINK, YoutubeIcon)}
            {createFooterButton('Github organization', GITHUB_LINK, GithubIcon)}
          </div>
        </Grid>
      </Grid>

      <Divider sx={{ mt: 5 }} />

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

            {/* Package version */}
            <li className={css.subListItem}>
              <a href={`${packageJson.homepage}/releases/tag/v${packageJson.version}`} target="_blank" rel="noreferrer">
                <SvgIcon component={GithubIcon} inheritViewBox fontSize="inherit" sx={{ mr: 1 }} />v
                {packageJson.version}
              </a>
            </li>
          </ul>
        </Grid>

        <Grid item my={2}>
          <Typography color="primary.light" fontSize="16px">
            &copy;2023–{new Date().getFullYear()} Safe Ecosystem Foundation
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer
