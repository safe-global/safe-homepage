import { Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import type { ReactElement } from 'react'

import OneInchLogo from '@/public/images/1inch.svg'
import MakerLogo from '@/public/images/maker.svg'
import ENSLogo from '@/public/images/ens.svg'
import ZapperLogo from '@/public/images/zapper.svg'
import AaveLogo from '@/public/images/aave.svg'
import BalancerLogo from '@/public/images/balancer.svg'
import VitalikImage from '@/public/images/vitalik.png'
import PunkImage from '@/public/images/punk.png'
import AdidasLogo from '@/public/images/adidas.svg'
import KPMGLogo from '@/public/images/kpmg.svg'
import StripeLogo from '@/public/images/stripe.svg'

const TrustedBy = (): ReactElement => {
  return (
    <Container>
      <Typography variant="caption" component="div" textAlign="center" mb={8}>
        Trusted by the empowering organisations and individuals
      </Typography>
      <Grid container justifyContent="center">
        <Grid item container md={10} spacing="40px" justifyContent="center" alignItems="center">
          <Grid item>
            <OneInchLogo />
          </Grid>
          <Grid item>
            <MakerLogo />
          </Grid>
          <Grid item>
            <ENSLogo />
          </Grid>
          <Grid item>
            <ZapperLogo />
          </Grid>
          <Grid item>
            <AaveLogo />
          </Grid>
          <Grid item>
            <BalancerLogo />
          </Grid>
          <Grid item>
            <Image src={VitalikImage} alt="Image of Vitalik" />
          </Grid>
          <Grid item>
            <Image src={PunkImage} alt="Image of Punk" />
          </Grid>
          <Grid item>
            <AdidasLogo />
          </Grid>
          <Grid item>
            <KPMGLogo />
          </Grid>
          <Grid item>
            <StripeLogo />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default TrustedBy
