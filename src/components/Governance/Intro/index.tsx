import type { ReactElement } from 'react'
import { Container, Divider, Grid, Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'
import HeaderParticles from '@/public/images/header_particles.svg'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'

const Intro = ({ title, buttons }: BaseBlock & { gif: BaseBlock['image'] }): ReactElement => {
  return (
    <Container>
      <Grid container className={css.container} spacing={{ xs: 6, md: 1, xl: '50px' }}>
        <Grid item md={6}>
          <Typography className={css.title} variant="h1">
            {title}
          </Typography>
          <ButtonsWrapper buttons={buttons} btnColor="primary" />
        </Grid>
        <Grid item md={5} className={css.animationWrapper}>
          {/* TODO: change the animation */}
          <div className={css.particleWrapper}>
            <HeaderParticles className={css.bg} />
          </div>
        </Grid>
      </Grid>
      <Divider />
    </Container>
  )
}

export default Intro
