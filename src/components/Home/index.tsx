import React from 'react'
import css from './styles.module.css'
import { Button, Container, Grid, Typography } from '@mui/material'

const CommunityBlock = () => {
  return (
    <Container>
      <Grid container py="235px" spacing="30px">
        <Grid item md={1} />
        <Grid item md={5}>
          <Typography variant="caption" mb="20px">
            Join the community
          </Typography>
          <Typography variant="h1" mb={4}>
            Unlock ownership of your assets on any{' '}
            <Typography variant="h1" component="span" color="primary">
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

export const Home = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.content}>
          <Typography className={css.title} variant="h1">
            Unlock digital
            <br />
            assets ownership
          </Typography>
          <Typography className={css.subtitle}>
            The most trusted decentralized custody protocol
            <br />
            and collective asset management platform on Ethereum.
          </Typography>
          <div className={css.buttons}>
            <Button variant="contained" color="background" size="large">
              Build
            </Button>
            <Button href="https://app.safe.global" target="_blank" variant="contained" color="secondary" size="large">
              Launch Wallet
            </Button>
          </div>
        </div>
      </div>
      <CommunityBlock />
    </>
  )
}
