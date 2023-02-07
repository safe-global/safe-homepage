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
}: {
  positions: Position[]
  title: string
  text: string
}): ReactElement => {
  return (
    <Container className={css.bg}>
      <Grid container className={css.container}>
        <Chip
          label={`${positions.length} open position${positions.length === 1 ? '' : 's'}`}
          variant="outlined"
          color="primary"
          sx={({ typography }) => ({ ...typography.caption, color: 'primary' })}
        />

        <Typography variant="h1" className={css.title}>
          {title}
        </Typography>

        <Typography className={css.subtitle}>{text}</Typography>

        <Button variant="contained" size="large" LinkComponent={Link} href="#positions">
          View positions
        </Button>
      </Grid>
    </Container>
  )
}
