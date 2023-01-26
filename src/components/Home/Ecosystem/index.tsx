import { Grid, Typography, Button, Container, Box } from '@mui/material'
import type { ReactElement } from 'react'

import css from './styles.module.css'

const Ecosystem = (): ReactElement => {
  return (
    <div className={css.bg}>
      <Container sx={{ textAlign: 'center' }}>
        <Box height={{ xs: '700px', md: '1090px' }} my={{ xs: 8, md: '235px' }} display="flex" alignItems="center">
          <Grid container justifyContent="center">
            <Grid item md={8}>
              <Typography variant="caption" component="div" mb={3}>
                Ecosystem
              </Typography>
              <Typography variant="h1" mb={4}>
                Safe{' '}
                <Typography variant="inherit" component="span" color="primary">
                  powers projects
                </Typography>{' '}
                in every corner of web3
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography>
                130+ projects from DAO tools to NFT collectives are building on Safe Core protocol. Do almost anything
                in web3 while enjoying Safe’s battle-tested security and co-ownership capabilities.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  )
}

export default Ecosystem
