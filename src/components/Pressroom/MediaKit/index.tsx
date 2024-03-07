import { Container, Divider, Grid, Typography } from '@mui/material'
import NextLink from 'next/link'
import { PRESS_LINK } from '@/config/constants'
import MailToCard from '@/components/Pressroom/MailToCard'
import ArrowIcon from '@/public/images/arrow-out-icon.svg'
import css from './styles.module.css'
import commonCss from '../styles.module.css'

const MediaKit = () => {
  return (
    <Container>
      <Divider sx={{ mt: '100px' }} />
      {/* Media Kit */}
      <Grid container mt="120px" rowGap={4}>
        <Grid item md={6} className={css.alignCenter}>
          <Typography variant="h1">Media kit</Typography>
        </Grid>
        <Grid item md={1} />
        <Grid item xs={12} md={5}>
          <NextLink href={PRESS_LINK} target="_blank" rel="noreferrer" className={commonCss.card}>
            <div className={commonCss.spacedBetween}>
              <Typography color="primary.light" variant="caption">
                Download
              </Typography>
              <ArrowIcon className={commonCss.icon} />
            </div>
            <Typography variant="h4">Media kit</Typography>
          </NextLink>
        </Grid>
      </Grid>

      {/* Contact Us */}
      <Grid container mt={{ xs: '120px', md: '140px' }} rowGap={4}>
        <Grid item md={6} className={css.alignCenter}>
          <Typography variant="h1">Contact us</Typography>
        </Grid>
        <Grid item md={1} />
        <Grid item xs={12} md={5}>
          <MailToCard />
        </Grid>
      </Grid>
    </Container>
  )
}

export default MediaKit
