import { Button, Container, Divider, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'

const Contact = () => {
  return (
    <Container>
      <Divider />
      <Grid container className={layoutCss.container} justifyContent="center">
        <Grid item md={6} textAlign="center">
          <Typography variant="h2" mb={5}>
            Want to build on Safe? Get in touch
          </Typography>
          <Button variant="contained" size="large">
            Contact us
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Contact
