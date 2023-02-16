import { Button, Container, Grid, Typography } from '@mui/material'
import { CORE_LINK, WALLET_LINK } from '@/config/constants'
import css from '@/components/Home/Intro/styles.module.css'
import type { BaseBlock } from '@/components/Home/types'

const Intro = ({ title, text }: BaseBlock) => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <Container>
          <Grid container flexDirection="column" className={css.content}>
            <Grid item md={7}>
              <Typography className={css.title} variant="h1">
                {title}
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography className={css.subtitle}>{text}</Typography>
              <div className={css.buttons}>
                <Button
                  variant="contained"
                  color="background"
                  size="large"
                  href={CORE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Build
                </Button>
                <Button
                  href={WALLET_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  color="secondary"
                  size="large"
                >
                  Launch Wallet
                </Button>
              </div>
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
