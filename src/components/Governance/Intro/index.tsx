import { Container, Divider, Grid, Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'

const Intro = ({ title, buttons, image }: BaseBlock) => {
  return (
    <Container>
      <Grid container className={css.container} spacing={{ xs: 6, md: 1, xl: '50px' }}>
        <Grid item md={6}>
          <Typography variant="h1" mb={5}>
            {title}
          </Typography>
          <ButtonsWrapper buttons={buttons} />
        </Grid>
        <Grid item md={5} className={css.imageContainer}>
          <div className={css.imageWrapper}>
            <img {...image} />
          </div>
        </Grid>
      </Grid>
      <Divider />
    </Container>
  )
}

export default Intro
