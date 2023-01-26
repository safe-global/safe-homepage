import type { ReactElement } from 'react'
import Image from 'next/image'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

import LinkButton from '@/components/common/LinkButton'
import AnimationPlaceholderImage from '@/public/images/anim1-placeholder.png'

const SafeCore = (): ReactElement => {
  return (
    <Container disableGutters>
      <Grid container my={{ xs: 8, md: '235px' }} spacing="30px">
        <Grid item md={6}>
          <Image src={AnimationPlaceholderImage} alt="Just a placeholder" />
        </Grid>
        <Grid item md={6}>
          <Typography variant="caption" component="div" mb={3}>
            Safe Core
          </Typography>
          <Typography variant="h1" mb={5}>
            Build on the safest account abstraction protocol
          </Typography>
          <Typography mb={5}>
            Get started with quick start guides, protocol documentation, SDK, and fully open source code.
          </Typography>
          <Box display="flex" gap={3}>
            <Button variant="contained" size="large">
              Start building
            </Button>
            <LinkButton disableRipple>View documentation</LinkButton>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default SafeCore
