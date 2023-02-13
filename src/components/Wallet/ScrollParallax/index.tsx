import { Box, Button, Container, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import LinkButton from '@/components/common/LinkButton'

import Address1Image from '@/public/images/Ownership/address1.svg'
import Address2Image from '@/public/images/Ownership/address2.svg'
import FrameImage from '@/public/images/Ownership/frame.svg'
import { BaseBlock } from '@/components/Home/types'

const ScrollParallax = ({ title, caption, text, link }: BaseBlock) => {
  return (
    <Container disableGutters>
      <Grid container className={layoutCss.container} spacing="30px">
        <Grid item md={6}>
          <FrameImage />
          <Address1Image />
          <Address2Image />
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

export default ScrollParallax
