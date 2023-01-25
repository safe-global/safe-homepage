import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import ProtocolImage from '@/public/images/protocol.png'
import Image from 'next/image'

const Protocol = () => {
  return (
    <Container disableGutters>
      <Grid container my="235px" spacing="30px">
        <Grid item md={6}>
          <Typography variant="caption" component="div" mb="20px">
            More than a protocol
          </Typography>
          <Typography variant="h1" mb={4}>
            <Typography variant="h1" component="span" color="primary">
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

export default Protocol
