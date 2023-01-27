import Image from 'next/image'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import type { ReactElement } from 'react'

import ProtocolImage from '@/public/images/protocol.png'

// TODO: Currently not used, might be deleted later
const SafeWallet = (): ReactElement => {
  return (
    <Container disableGutters>
      <Grid container my={{ xs: 8, md: '235px' }} spacing="30px">
        <Grid item md={6}>
          <Typography variant="caption" component="div" mb="20px">
            Safe Wallet
          </Typography>
          <Typography variant="h1" mb={4}>
            <Typography variant="inherit" component="span" color="primary">
              Secure assets
            </Typography>{' '}
            with the most trusted multi-signature wallet
          </Typography>
          <Typography mb={5}>
            Manage your company or individual crypto assets, with the option to require a predefined number of
            signatures to confirm transactions.
          </Typography>
          <Button variant="contained" size="large">
            Read more
          </Button>
        </Grid>
        <Grid item md={6}>
          <Box display="flex" justifyContent="center">
            <Image src={ProtocolImage} alt="Phone with logos" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default SafeWallet
