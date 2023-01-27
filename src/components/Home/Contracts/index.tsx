import type { ReactElement } from 'react'
import Image from 'next/image'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

import LinkButton from '@/components/common/LinkButton'
import ContractsImage from '@/public/images/contract.png'

const Contracts = (): ReactElement => {
  return (
    <Container disableGutters>
      <Grid container my={{ xs: 8, md: '235px' }} spacing="30px">
        <Grid item md={6}>
          <Image src={ContractsImage} alt="Metrics about bug bounty" />
        </Grid>
        <Grid item md={6}>
          <Typography variant="h1" mb={4}>
            Safe {'{CORE}'} smart contracts are{' '}
            <Typography variant="inherit" component="span" color="primary">
              the most battle-tested
            </Typography>
          </Typography>
          <Typography mb={5}>
            The Safe core smart contracts have passed the highest possible security standard in the industry: Formal
            Verification.
          </Typography>
          <Box display="flex" gap={3}>
            <Button variant="contained" size="large">
              Read report
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Contracts
