import { Grid, Typography, Button, Container } from '@mui/material'
import type { ReactElement } from 'react'

import css from './styles.module.css'

const Ecosystem = (): ReactElement => {
  return (
    <div className={css.bg}>
      <Container sx={{ textAlign: 'center' }}>
        <Grid
          container
          my={{ xs: 8, md: '235px' }}
          alignItems="center"
          justifyContent="center"
          height={{ xs: '700px', md: '1090px' }}
        >
          <Grid item md={8}>
            <Typography variant="caption" component="div">
              Safe Ecosystem
            </Typography>
            <Typography variant="h1" mb={4}>
              Safe{' '}
              <Typography variant="inherit" component="span" color="primary">
                powers projects
              </Typography>{' '}
              in every corner of web3
            </Typography>
            <Typography mb={5}>
              130+ projects from DAO tools to NFT collectives are building on Safe. Do almost anything in web3 while
              enjoying Safe’s battle-tested security and co-ownership capabilities.
            </Typography>
            <Button variant="contained" size="large">
              Explore ecosystem
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Ecosystem
