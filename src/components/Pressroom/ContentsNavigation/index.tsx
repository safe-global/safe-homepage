import { Box, ButtonBase, Grid, Typography } from '@mui/material'
import css from './styles.module.css'
import { AppRoutes } from '@/config/routes'
import NextLink from 'next/link'
import { PRESS_LINK } from '@/config/constants'
import { scrollToElement } from '@/lib/scrollSmooth'

type NavItemType = {
  label: string
  href: string
}

export const enum PressroomIds {
  ABOUT_US = 'about',
  SAFE_IN_THE_NEWS = 'news',
  PRESS_RELEASES = 'press',
}

const appendHash = (href: string) => {
  return href.startsWith('#') ? href : `#${href}`
}

const sections: NavItemType[] = [
  { label: 'About us', href: appendHash(PressroomIds.ABOUT_US) },
  { label: 'Safe in the news', href: appendHash(PressroomIds.SAFE_IN_THE_NEWS) },
  { label: 'Press releases', href: appendHash(PressroomIds.PRESS_RELEASES) },
  { label: 'Blog', href: AppRoutes.blog.index },
  { label: 'Media kit', href: PRESS_LINK },
]

const ContentsNavigation = () => {
  const handleContentTableClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const href = e.currentTarget.getAttribute('href') || ''
    const elementId = href?.slice(href.indexOf('#'))

    if (!elementId) {
      return window.open(href, '_blank', 'noopener noreferrer')
    }

    scrollToElement(elementId, 100)
  }

  return (
    <Box mt="140px">
      <Typography variant="h3">What are you looking for?</Typography>
      <Grid container columnSpacing="32px" rowGap="36px" mt="36px">
        {sections.map((item) => (
          <Grid item xs={12} md={4} key={item.href}>
            <ButtonBase
              LinkComponent={NextLink}
              href={item.href}
              onClick={handleContentTableClick}
              className={css.navButton}
            >
              <Typography>{item.label}</Typography>
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ContentsNavigation
