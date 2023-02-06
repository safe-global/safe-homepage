import { Button, Chip, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import Link from 'next/link'
import type { ReactElement } from 'react'

import css from './styles.module.css'

export const Intro = ({ positions }: { positions: number }): ReactElement => {
  return (
    <Container className={css.bg}>
      <Grid container className={css.container}>
        <Chip
          label={`${positions} open position${positions === 1 ? '' : 's'}`}
          variant="outlined"
          color="primary"
          sx={({ typography }) => ({ ...typography.caption, color: 'primary' })}
        />

        <Typography variant="h1" className={css.title}>
          Impact the future of ownership
        </Typography>

        <Typography className={css.subtitle}>
          Our team is focused on a mission of unlocking ownership for the world. By building infrastructure that is
          robust and usable, we aim to fix some of web3’s biggest challenges.
        </Typography>

        <Button variant="contained" size="large" LinkComponent={Link} href="#positions">
          View positions
        </Button>
      </Grid>
    </Container>
  )
}
