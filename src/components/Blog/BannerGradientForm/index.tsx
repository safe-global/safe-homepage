import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

const BannerGradientForm = ({ title }: { title: string }) => {
  return (
    <Container className={layoutCss.containerMedium}>
      <div className={css.container}>
        <Grid container>
          <Grid item xs={12} md={6} className={css.title}>
            <Typography variant="h2">{title}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <form
              className={css.form}
              onSubmit={(e) => {
                e.preventDefault()
                // TODO: Implement submit callback
                console.log('Implement submit callback')
              }}
            >
              <TextField label="Email" variant="outlined" fullWidth margin="normal" placeholder="Your email" />
              <Button type="submit" variant="contained" color="secondary" className={css.submitButton}>
                Subscribe
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default BannerGradientForm
