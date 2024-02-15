import { Container, Grid, Typography } from '@mui/material'
import css from './styles.module.css'

const BannerForm = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <Container>
      <div className={css.container}>
        <Grid container spacing="30px">
          <Grid item xs={12} md={6} className={css.centeredContent}>
            <Typography variant="h2">{title}</Typography>
            <Typography variant="h4" mt="16px">
              {subtitle}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className={css.centeredContent} mt={3}>
            <iframe src="https://safe.mirror.xyz/subscribe/embed" />
          </Grid>
          <img src="/images/banner-lines.svg" className={css.image} />
        </Grid>
      </div>
    </Container>
  )
}

export default BannerForm
