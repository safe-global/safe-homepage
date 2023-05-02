import { Container, Grid, Typography } from '@mui/material'
import css from './styles.module.css'
import type { BaseBlock } from '@/components/Home/types'

const EcosystemIntro = ({ title, text }: BaseBlock) => {
  return (
    <Container>
      <Grid
        container
        className={css.container}
        spacing={{ xs: 6, md: '30px', xl: '50px' }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item md={8}>
          <Typography className={css.title} variant="h1" mb={4}>
            {title}
          </Typography>
          <Typography variant="h4" component="div" mb={5}>
            {text}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default EcosystemIntro
