import { ButtonBase, Container, Divider, Grid, TextField, Typography } from '@mui/material'

import { AppRoutes } from '@/config/routes'
import DiscordIcon from '@/public/images/discord-icon.svg'
import TwitterIcon from '@/public/images/twitter-icon.svg'

import css from './styles.module.css'
import Link from 'next/link'

const safeProtocolItems = [
  {
    label: 'Core',
    href: 'https://core.safe.global',
  },
  {
    label: 'Developer Docs',
    href: 'https://docs.safe.global',
  },
]

const communityItems = [
  {
    label: 'Safe DAO',
    href: 'https://forum.safe.global',
  },
  {
    label: 'Discord',
    href: 'https://chat.safe.global',
  },
  {
    label: 'Safe Guardians',
    href: 'https://forum.safe.global/t/guardians-gather/265',
  },
]

const resourcesItems = [
  {
    label: 'Careers',
    href: AppRoutes.careers,
  },
  {
    label: 'Help Center',
    href: 'https://help.safe.global',
  },
  {
    label: 'Brand Kit',
    href: '#',
  },
]

const subFooterItems = [
  {
    label: 'Terms',
    href: AppRoutes.terms,
  },
  {
    label: 'Privacy',
    href: AppRoutes.index,
  },
  {
    label: 'Press Kit',
    href: 'https://press.safe.global',
  },
  {
    label: 'Licenses',
    href: AppRoutes.index,
  },
  {
    label: 'Cookie Policy',
    href: AppRoutes.index,
  },
  {
    label: 'Preferences',
    href: AppRoutes.index,
  },
]

const Footer = () => {
  return (
    <Container>
      <Grid container flexDirection={{ xs: 'column', md: 'row' }}>
        <Grid item md={2}>
          <Typography variant="caption" color="text.primary">
            Safe Protocol
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
        <Grid item md={2}>
          <Typography variant="caption" color="text.primary">
            Community
          </Typography>
          <ul className={css.list}>
            {communityItems.map((item) => (
              <li className={css.listItem} key={item.href}>
                <Link href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>
        <Grid item md={2}>
          <Typography variant="caption" color="text.primary">
            Resources
          </Typography>
          <ul className={css.list}>
            {resourcesItems.map((item) => (
              <li className={css.listItem} key={item.href}>
                <Link href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>
        <Grid item md={4} ml={{ xs: 0, md: 'auto' }}>
          <Typography variant="caption" component="div" color="text.primary" mb={2}>
            Subscribe to our newsletter
          </Typography>
          <TextField fullWidth placeholder="Your email address" />
          <div className={css.socials}>
            <ButtonBase disableRipple aria-label="Discord">
              <DiscordIcon />
            </ButtonBase>
            <ButtonBase disableRipple aria-label="Twitter">
              <TwitterIcon />
            </ButtonBase>
          </div>
        </Grid>
      </Grid>
      <Divider sx={{ mt: '26px' }} />
      <Grid container alignItems="center" justifyContent="space-between" mb={2}>
        <Grid item>
          <ul className={css.subList}>
            {subFooterItems.map((item) => (
              <li className={css.subListItem} key={item.href}>
                <Link href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>
        <Grid item my={2}>
          <Typography color="primary.light" fontSize="16px">
            ©2023 Safe Ecosystem Foundation
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer
