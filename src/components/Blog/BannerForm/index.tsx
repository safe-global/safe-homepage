import { Container, Grid, Typography } from '@mui/material'
import { MIRROR_SUBSCRIBE_LINK } from '@/config/constants'
import css from './styles.module.css'
import { type ReactElement } from 'react'

const BannerForm = ({ title, subtitle }: { title: string; subtitle: ReactElement }) => (
  <Container>
    <div className={css.container}>
      <Grid container>
        <img src="/images/banner-lines.svg" className={css.image} />

        <Grid item xs={12} md={6} className={css.textContainer}>
          <Typography variant="h2">{title}</Typography>

          <Typography variant="h4" mt="16px">
            {subtitle}
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} my="auto">
          <iframe src={MIRROR_SUBSCRIBE_LINK} />
        </Grid>
      </Grid>
    </div>
  </Container>
)

export default BannerForm
