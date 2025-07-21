import { Box, ButtonBase, Grid, Typography } from '@mui/material'
import css from './styles.module.css'
import { AppRoutes } from '@/config/routes'
import NextLink from 'next/link'
import { PRESS_LINK } from '@/config/constants'

type NavItemType = {
  label: string
  href: string
  target?: HTMLAnchorElement['target']
  rel?: HTMLAnchorElement['rel']
}

export const enum PressroomIds {
  ABOUT_US = 'about',
  SAFE_IN_THE_NEWS = 'news',
  PRESS_RELEASES = 'press',
}

const sections: NavItemType[] = [
  { label: 'About us', href: `#${PressroomIds.ABOUT_US}` },
  { label: 'Safe in the news', href: `#${PressroomIds.SAFE_IN_THE_NEWS}` },
  { label: 'Press releases', href: `#${PressroomIds.PRESS_RELEASES}` },
  { label: 'Blog', href: AppRoutes.blog.index },
  { label: 'Media kit', href: PRESS_LINK, target: '_blank', rel: 'noopener noreferrer' },
]

const ContentsNavigation = () => (
  <Box component="div" mt="140px">
    <Typography variant="h3">What are you looking for?</Typography>
    <Grid container columnSpacing="32px" rowGap="36px" mt="36px">
      {sections.map((item) => (
        <Grid item xs={12} md={4} key={item.href}>
          <NextLink {...item}>
            <ButtonBase className={css.navButton}>
              <Typography>{item.label}</Typography>
            </ButtonBase>
          </NextLink>
        </Grid>
      ))}
    </Grid>
  </Box>
)

export default ContentsNavigation
