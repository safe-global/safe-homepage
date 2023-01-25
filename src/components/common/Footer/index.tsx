import { ButtonBase, Container, Divider, Grid, IconButton, TextField, Typography } from '@mui/material'
import { AppRoutes } from '@/config/routes'
import css from './styles.module.css'
import FooterBG from '@/public/images/footer-bg.svg'
import DiscordIcon from '@/public/images/discord-icon.svg'
import GithubIcon from '@/public/images/github-icon.svg'
import TwitterIcon from '@/public/images/twitter-icon.svg'

const safeProtocolItems = [
  {
    label: 'Enterprise',
    href: AppRoutes.index,
  },
  {
    label: 'Core',
    href: AppRoutes.core,
  },
  {
    label: 'Developers Gitbook',
    href: AppRoutes.index,
  },
  {
    label: 'Safe Ecosystem Foundation',
    href: AppRoutes.index,
  },
]

const communityItems = [
  {
    label: 'Safe DAO',
    href: AppRoutes.index,
  },
  {
    label: 'Discord',
    href: AppRoutes.core,
  },
  {
    label: 'Safe Guardians',
    href: AppRoutes.index,
  },
]

const resourcesItems = [
  {
    label: 'Careers',
    href: AppRoutes.careers,
  },
  {
    label: 'Help Center',
    href: AppRoutes.core,
  },
  {
    label: 'Brand Kit',
    href: AppRoutes.index,
  },
  {
    label: 'Enterprise',
    href: AppRoutes.index,
  },
]

const subFooterItems = [
  {
    label: 'Terms',
    href: AppRoutes.index,
  },
  {
    label: 'Privacy',
    href: AppRoutes.index,
  },
  {
    label: 'Press Kit',
    href: AppRoutes.index,
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
      <Grid container>
        <Grid item md={2}>
          <Typography variant="caption" color="text.primary">
            Safe Protocol
          </Typography>
          <ul className={css.list}>
            {safeProtocolItems.map((item) => (
              <li className={css.listItem} key={item.href}>
                {item.label}
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
                {item.label}
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
                {item.label}
              </li>
            ))}
          </ul>
        </Grid>
        <Grid item md={4} marginLeft="auto">
          <Typography variant="caption" component="div" color="text.primary" mb={2}>
            Subscribe to our newsletter
          </Typography>
          <TextField fullWidth placeholder="Your email address" />
          <div className={css.socials}>
            <ButtonBase disableRipple>
              <DiscordIcon />
            </ButtonBase>
            <ButtonBase disableRipple>
              <GithubIcon />
            </ButtonBase>
            <ButtonBase disableRipple>
              <TwitterIcon />
            </ButtonBase>
          </div>
        </Grid>
      </Grid>
      <Divider sx={{ marginTop: '26px' }} />
      <Grid container mb={4} alignItems="center" justifyContent="space-between">
        <Grid item>
          <ul className={css.subList}>
            {subFooterItems.map((item) => (
              <li className={css.subListItem} key={item.href}>
                {item.label}
              </li>
            ))}
          </ul>
        </Grid>
        <Grid item>
          <Typography color="primary.light">©2023 Safe Ecosystem Foundation</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <FooterBG />
      </Grid>
    </Container>
  )
}

export default Footer
