import { Box, Container, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import LinkButton from '@/components/common/LinkButton'

import Address1Image from '@/public/images/Ownership/address1.svg'
import Address2Image from '@/public/images/Ownership/address2.svg'
import FrameImage from '@/public/images/Ownership/frame.svg'
import type { BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'
import ParallaxWrapper from '@/components/Wallet/ScrollParallax/ParallaxWrapper'

const ScrollParallax = ({ title, caption, text, link }: BaseBlock) => {
  return (
    <Container disableGutters>
      <Grid container className={layoutCss.container} spacing="30px">
        <Grid item xs={12} md={6}>
          <div className={css.parallaxWrapper}>
            <FrameImage />
            <ParallaxWrapper translateX={0} translateY={-220} depth={2} direction={-1}>
              <Address1Image className={css.address1} />
            </ParallaxWrapper>
            <ParallaxWrapper translateX={0} translateY={-120} depth={0} direction={-1}>
              <Address2Image className={css.address2} />
            </ParallaxWrapper>
          </div>
        </Grid>
        <Grid item md={1} display={{ xs: 'none', md: 'block' }} />
        <Grid item xs={12} md={5}>
          <Typography variant="caption" component="div" mb={3}>
            {caption}
          </Typography>
          <Typography variant="h2" mb={4}>
            {title}
          </Typography>
          <Typography mb={5}>{text}</Typography>
          <Box display="flex" gap={3}>
            <LinkButton href={link?.href} variant="contained" size="large">
              {link?.title}
            </LinkButton>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ScrollParallax
