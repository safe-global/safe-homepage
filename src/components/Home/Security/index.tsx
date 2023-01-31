import type { ReactElement } from 'react'
import Image from 'next/image'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

import ContractsImage from '@/public/images/contract.png'
import layoutCss from '@/components/common/styles.module.css'
import { BaseBlock } from '@/components/Home/types'
import LinkButton from '@/components/common/LinkButton'

const Security = ({ title, text, caption, link }: BaseBlock): ReactElement => {
  return (
    <Container disableGutters>
      <Grid container className={layoutCss.container} spacing="30px">
        <Grid item md={6}>
          <Image src={ContractsImage} alt="Metrics about bug bounty" />
        </Grid>
        <Grid item md={6}>
          <Typography variant="caption" component="div" mb={3}>
            {caption}
          </Typography>
          <Typography variant="h2" mb={4}>
            {title}
          </Typography>
          <Typography mb={5}>{text}</Typography>
          <Box display="flex" gap={3}>
            <Button href={link?.href} variant="contained" size="large">
              {link?.title}
            </Button>
            <LinkButton href="#">Start bug hunting</LinkButton>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Security
