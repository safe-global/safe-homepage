import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import css from './styles.module.css'

const BannerGradientForm = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <Container>
      <div className={css.container}>
        <Grid container spacing="30px">
          <Grid item xs={12} md={6}>
            <Typography variant="h2">{title}</Typography>
            <Typography variant="h4" mt="16px">
              {subtitle}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} display="flex" alignItems="center">
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
