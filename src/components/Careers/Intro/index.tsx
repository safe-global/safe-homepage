import { Button, Chip, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import Link from 'next/link'
import clsx from 'clsx'
import type { ReactElement } from 'react'
import HeaderParticles from '@/public/images/header_particles.svg'

import { useOpenPositions } from '@/hooks/useOpenPositions'

import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

export const Intro = ({
  title,
  text,
  link,
}: {
  title: string
  text: string
  link: {
    title: string
    href: string
  }
}): ReactElement => {
  const { data: positions = [] } = useOpenPositions()

  return (
    <Container className={css.wrapper}>
      <HeaderParticles className={css.bg} />
      <Grid container className={clsx(layoutCss.container, css.container)}>
        <Grid item xs={12}>
          <Chip
            label={`${positions.length} open position${positions.length === 1 ? '' : 's'}`}
            variant="outlined"
            color="primary"
            className={css.chip}
            sx={({ typography }) => typography.caption}
            clickable
            component="a"
            href={link.href}
          />
        </Grid>

        <Grid item xs={12} md={10}>
          <Typography variant="h1" className={css.title}>
            {title}
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} textAlign="center">
          <Typography className={css.text} mb={3}>
            {text}
          </Typography>

          <Button variant="contained" size="large" LinkComponent={Link} href={link.href}>
            {link.title}
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Intro
