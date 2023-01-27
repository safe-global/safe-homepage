import type { ReactElement } from 'react'
import Image from 'next/image'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

import ContractsImage from '@/public/images/contract.png'
import layoutCss from '@/components/common/styles.module.css'

const Contracts = (): ReactElement => {
  return (
    <Container disableGutters>
      <Grid container className={layoutCss.container} spacing="30px">
        <Grid item md={6}>
          <Image src={ContractsImage} alt="Metrics about bug bounty" />
        </Grid>
        <Grid item md={6}>
          <Typography variant="h2" mb={4}>
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
