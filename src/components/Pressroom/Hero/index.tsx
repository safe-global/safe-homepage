import { Container, Grid, Typography } from '@mui/material'
import MailToCard from '@/components/Pressroom/MailToCard'

const Hero = () => {
  return (
    <Container>
      <Grid container mt="60px" rowGap={4}>
        <Grid item md={6}>
          <Typography variant="h1">Pressroom</Typography>
          <Typography mt={3}>Explore Safe&apos;s Latest Press Releases and Media Assets</Typography>
        </Grid>
        <Grid item md={1} />
        <Grid item xs={12} md={5}>
          <MailToCard />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Hero
