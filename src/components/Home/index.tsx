import React from 'react'
import css from './styles.module.css'
import { Button, Typography } from '@mui/material'

export const Home = () => {
  return (
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
          <Button variant="contained" color="secondary" size="large">
            Launch Wallet
          </Button>
        </div>
      </div>
    </div>
  )
}
