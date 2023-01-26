import { Button, Typography } from '@mui/material'
import type { ReactElement } from 'react'

import Community from '@/components/Home/Community'
import Contracts from '@/components/Home/Contracts'
import TrustedBy from '@/components/Home/TrustedBy'
import Ecosystem from '@/components/Home/Ecosystem'
import WalletDownload from '@/components/common/WalletDownload'
import Governance from '@/components/Home/Governance'
import SafeWallet from '@/components/Home/SafeWallet'
import { WALLET_LINK } from '@/config/constants'

import css from './styles.module.css'
import SafeCore from '@/components/Home/SafeCore'

export const Home = (): ReactElement => {
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
        </div>
      </div>
      <Community />
      <TrustedBy />
      <SafeCore />
      <Ecosystem />
      <SafeWallet />
      <Contracts />
      <Governance />
      <WalletDownload />
    </>
  )
}
