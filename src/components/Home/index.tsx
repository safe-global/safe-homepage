import React from 'react'
import css from './styles.module.css'
import { Button, Typography } from '@mui/material'
import Community from '@/components/Home/Community'
import Protocol from '@/components/Home/Protocol'
import Contracts from '@/components/Home/Contracts'
import TrustedBy from '@/components/Home/TrustedBy'

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
      <Community />
      <TrustedBy />
      <Protocol />
      <Contracts />
    </>
  )
}
