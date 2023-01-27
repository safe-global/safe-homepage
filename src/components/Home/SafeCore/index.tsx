import type { ReactElement } from 'react'
import Image from 'next/image'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

import LinkButton from '@/components/common/LinkButton'
import AnimationPlaceholderImage from '@/public/images/anim2-placeholder.png'
import css from './styles.module.css'

const SafeCore = (): ReactElement => {
  return (
    <div className={css.bg}>
      <Container disableGutters>
        <Grid container mt={{ xs: 8, md: '235px' }} spacing="30px">
          <Grid item md={6}>
            <div className={css.card}>
              <Image src={AnimationPlaceholderImage} alt="Just a placeholder" />
              <div className={css.tag}>Safe {'{CORE}'}</div>
              <Typography variant="h3" mb={3} mt={2}>
                Build on the <i>Safest</i> account abstraction protocol
              </Typography>
              <Typography color="primary.light" mb={4}>
                Use our Safe Core protocol, SDKs and APIs to add account abstraction and secure self-custody into any
                web3 project.
              </Typography>
              <LinkButton sx={{ mt: 'auto' }}>Learn more</LinkButton>
            </div>
          </Grid>
          <Grid item md={6}>
            <div className={css.card}>
              <Image src={AnimationPlaceholderImage} alt="Just a placeholder" />
              <div className={css.tag}>Safe {'{WALLET}'}</div>
              <Typography variant="h3" mb={3} mt={2}>
                Use the most secure
                <br /> wallet in web3
              </Typography>
              <Typography color="primary.light" mb={4}>
                Use our flagship web, mobile and desktop apps to secure and control your assets with multi-signature
                based security as groups or as an individual.
              </Typography>
              <LinkButton sx={{ mt: 'auto' }}>Learn more</LinkButton>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default SafeCore
