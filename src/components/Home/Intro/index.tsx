import { Container, Grid, Typography } from '@mui/material'
import css from '@/components/Home/Intro/styles.module.css'
import type { BaseBlock } from '@/components/Home/types'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'

const Intro = ({ title, text, buttons }: BaseBlock) => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <Container>
          <Grid container flexDirection="column" className={css.content}>
            <Grid item md={10} width="100%">
              <Typography variant="h1" mb={3}>
                {title}
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography className={css.subtitle}>{text}</Typography>
              <ButtonsWrapper buttons={buttons} mobileDirection="row" />
            </Grid>
          </Grid>
        </Container>
        <div className={css.filter}>
          <video autoPlay muted loop className={css.video}>
            <source src="/videos/safe-logo.mp4" type="video/mp4" />
          </video>
          <div className={css.frame} />
        </div>

        <Typography variant="caption" className={css.scroll}>
          Scroll
        </Typography>
      </div>
    </div>
  )
}

export default Intro
