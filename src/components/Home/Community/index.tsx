import { Container, Grid, Typography } from '@mui/material'
import type { ReactElement } from 'react'

import css from './styles.module.css'

const Community = (): ReactElement => {
  return (
    <Container>
      <Grid container my="235px" spacing="30px">
        <Grid item md={1} />
        <Grid item md={5}>
          <Typography variant="caption" component="div" mb="20px">
            Join the community
          </Typography>
          <Typography variant="h1" mb={4}>
            Unlock ownership of your assets on any{' '}
            <Typography variant="inherit" component="span" color="primary">
              Ethereum chain
            </Typography>
          </Typography>
          <Typography variant="body2" color="primary.light">
            EVM is a software that executes smart contracts and computes the state of the Ethereum and executes
            bytecodes to contracts.
          </Typography>
        </Grid>
        <Grid item md={1} />
        <Grid item md={5}>
          <div className={css.metricWrapper}>
            <div>
              <p className={css.metric}>14M+</p>
              <Typography variant="caption">Total transactions</Typography>
            </div>
            <div>
              <p className={css.metric}>$30B+</p>
              <Typography variant="caption">Total assets stored</Typography>
            </div>
            <div>
              <p className={css.metric}>11</p>
              <Typography variant="caption">Networks supported</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Community
