import { Container, Grid, Typography } from '@mui/material'
import ArrowIcon from '@/public/images/arrow-out-icon.svg'
import css from './styles.module.css'

const Hero = () => {
  return (
    <Container>
      <Grid container className={css.container} rowGap={4}>
        <Grid item md={6}>
          <Typography variant="h1">Pressroom</Typography>
          <Typography mt={3}>Explore Safe&apos;s Latest Press Releases and Media Assets</Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <a href="mailto:comms@safe.global" target="_blank" rel="noreferrer" className={css.contact}>
            <div className={css.email}>
              <Typography variant="h4">comms@safe.global</Typography>
              <ArrowIcon className={css.icon} />
            </div>
            <Typography color="primary.light">For Media Inquiries</Typography>
          </a>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Hero
