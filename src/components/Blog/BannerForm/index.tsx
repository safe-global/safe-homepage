import { Container, Grid, Typography } from '@mui/material'
import { MIRROR_SUBSCRIBE_LINK } from '@/config/constants'
import css from './styles.module.css'

const BannerForm = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <Container>
      <div className={css.container}>
        <Grid container spacing="30px">
          <img src="/images/banner-lines.svg" className={css.image} />
          <Grid item xs={12} md={6} className={css.centeredContent}>
            <Typography variant="h2">{title}</Typography>
            <Typography variant="h4" mt="16px">
              {subtitle}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className={css.centeredContent} mt={3}>
            <iframe src={MIRROR_SUBSCRIBE_LINK} />
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default BannerForm
