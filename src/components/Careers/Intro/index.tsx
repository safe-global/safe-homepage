import { Button, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import clsx from 'clsx'
import type { ReactElement } from 'react'
import HeaderParticles from '@/public/images/header_particles.svg'

import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

const PositionsCount = dynamic(() => import('./PositionsCount'))

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
  return (
    <Container className={css.wrapper}>
      <HeaderParticles className={css.bg} />
      <Grid container className={clsx(layoutCss.container, css.container)}>
        <Grid item xs={12}>
          <PositionsCount href={link.href} className={css.chip} />
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
