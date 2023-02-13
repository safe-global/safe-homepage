import type { ReactElement } from 'react'
import Image from 'next/image'
import { Button, Container, Divider, Grid, Typography } from '@mui/material'
import { IOS_LINK, GPLAY_LINK } from '@/config/constants'
import IOSDownload from '@/public/images/ios-download.svg'
import GPlayDownload from '@/public/images/google-play-download.svg'
import QRImage from '@/public/images/Wallet/wallet-QR.png'

import css from './styles.module.css'

export type HeroSectionProps = {
  image: {
    src: string
    alt: string
  }
  textBlock: {
    title: string
    button: {
      text: string
      href: string
    }
  }
}

const HeroSection = ({ image, textBlock }: HeroSectionProps): ReactElement => {
  const { title, button } = textBlock
  const { text: buttonText, href } = button

  return (
    <Container>
      <Grid container className={css.container} spacing={{ xs: 6, md: '30px' }} justifyContent="space-between">
        <Grid item md={6}>
          <img {...image} />
        </Grid>
        <Grid item md={6}>
          <Typography className={css.title} variant="h1" mb={5}>
            {title}
          </Typography>
          <Grid container gap={4} flexDirection="column" justifyContent="flex-start">
            <Grid item>
              <Button key={buttonText} href={href} variant="contained" size="large">
                {buttonText}
              </Button>
            </Grid>
            <Grid item>
              <Grid container gap="10px" className={css.links}>
                <Grid item>
                  <a href={IOS_LINK} target="_blank" rel="noreferrer" aria-label="AppStore download">
                    <IOSDownload />
                  </a>
                </Grid>
                <Grid item>
                  <a href={GPLAY_LINK} target="_blank" rel="noreferrer" aria-label="Google Play download">
                    <GPlayDownload />
                  </a>
                </Grid>
                <Grid item>
                  <Image src={QRImage} alt="Mobile wallet" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
    </Container>
  )
}

export default HeroSection
