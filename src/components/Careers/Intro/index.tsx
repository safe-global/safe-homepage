import { Button, Chip, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import Link from 'next/link'
import type { ReactElement } from 'react'

import type { Position } from '@/hooks/useOpenPositions'

import css from './styles.module.css'

export const Intro = ({
  positions,
  title,
  text,
  link,
}: {
  positions: Position[]
  title: string
  text: string
  link: {
    title: string
    href: string
  }
}): ReactElement => {
  return (
    <Container className={css.bg}>
      <Grid container className={css.container}>
        <Grid item>
          <Chip
            label={`${positions.length} open position${positions.length === 1 ? '' : 's'}`}
            variant="outlined"
            color="primary"
            className={css.chip}
            sx={({ typography }) => typography.caption}
          />
        </Grid>

        <Typography variant="h1" className={css.title}>
          {title}
        </Typography>

        <Typography className={css.text}>{text}</Typography>

        <Button variant="contained" size="large" LinkComponent={Link} href={link.href}>
          {link.title}
        </Button>
      </Grid>
    </Container>
  )
}
