import type { BaseBlock } from '@/components/Home/types'
import { Container, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'

const FeatureCards = ({ title, text, items = [] }: BaseBlock) => {
  return (
    <Container className={layoutCss.containerMedium}>
      <Grid container justifyContent="space-between" columnSpacing="30px" rowGap="30px">
        <Grid item xs={12} md={7}>
          <Typography variant="h2">{title}</Typography>
        </Grid>

        {text && (
          <Grid item xs={12} md={5} alignContent="flex-end">
            <Typography variant="h5">{text}</Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  )
}

export default FeatureCards
