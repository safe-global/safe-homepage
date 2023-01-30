import { Button, Grid, Typography } from '@mui/material'
import type { ReactElement } from 'react'

import Community from '@/components/Home/Community'
import Contracts from '@/components/Home/Contracts'
import TrustedBy from '@/components/Home/TrustedBy'
import SafeCoreWallet from '@/components/Home/SafeCoreWallet'
import Ecosystem from '@/components/Home/Ecosystem'
import WalletDownload from '@/components/common/WalletDownload'
import Governance from '@/components/Home/Governance'
import { WALLET_LINK } from '@/config/constants'

import css from './styles.module.css'
import Contact from '@/components/Home/Contact'

export const Home = (): ReactElement => {
  return (
    <>
      <div className={css.container}>
        <div className={css.wrapper}>
          <video autoPlay muted loop className={css.video}>
            <source src="/videos/safe-logo.mp4" type="video/mp4" />
          </video>
          <div className={css.frame} />

          <Typography variant="caption" className={css.scroll}>
            Scroll
          </Typography>
        </div>
        <Grid container flexDirection="column" className={css.content}>
          <Grid item md={8}>
            <Typography className={css.title} variant="h1">
              Digital asset
              <br />
              ownership.
              <br />
              unlocked.
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Typography className={css.subtitle}>
              Safe is the most trusted decentralized custody protocol and collective asset management platform on
              Ethereum.
            </Typography>
            <div className={css.buttons}>
              <Button variant="contained" color="background" size="large">
                Build
              </Button>
              <Button
                href={WALLET_LINK}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="secondary"
                size="large"
              >
                Launch Wallet
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
      <Community />
      <TrustedBy />
      <SafeCoreWallet />
      <Ecosystem />
      <Contracts />
      <Governance />
      <Contact />
      <WalletDownload />
    </>
  )
}
