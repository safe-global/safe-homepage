import React from 'react'
import Image from 'next/image'
import { Box, Button, ButtonBase, Container, Grid, Typography } from '@mui/material'
import ContractsImage from '@/public/images/contract.png'
import css from './styles.module.css'

const Contracts = () => {
  return (
    <Container disableGutters>
      <Grid container my="235px" spacing="30px">
        <Grid item md={6}>
          <Image src={ContractsImage} alt="Metrics about bug bounty" />
        </Grid>
        <Grid item md={6}>
          <Typography variant="h1" mb={5}>
            Safe {'{CORE}'} contracts are{' '}
            <Typography variant="h1" component="span" color="primary">
              the most battle-tested
            </Typography>
          </Typography>
          <Box display="flex" gap={3}>
            <Button variant="contained" size="large">
              Learn more
            </Button>
            <ButtonBase disableRipple className={css.buttonLink}>
              Start Bug hunting
            </ButtonBase>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Contracts
