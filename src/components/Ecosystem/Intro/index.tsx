import { Container, Grid, Typography } from '@mui/material'
import css from './styles.module.css'
import BackgroundParticles from '@/public/images/particle-bg.svg'
import type { BaseBlock } from '@/components/Home/types'

const EcosystemIntro = ({ title, text }: BaseBlock) => {
  return (
    <Container>
      <BackgroundParticles className={css.bg} />
      <Grid container className={css.container} spacing={{ xs: 6, md: '30px', xl: '50px' }}>
        <Grid item md={8}>
          <Typography variant="h1" mb={4}>
            {title}
          </Typography>
          <Typography variant="h5" component="div" mb={5}>
            {text}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default EcosystemIntro
