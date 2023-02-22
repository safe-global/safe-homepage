import type { ReactElement } from 'react'
import { Button, Container, Divider, Grid, Typography } from '@mui/material'
import { IOS_LINK, GPLAY_LINK } from '@/config/constants'
import IOSDownload from '@/public/images/ios-download.svg'
import GPlayDownload from '@/public/images/google-play-download.svg'
import type { BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'

const Intro = ({ image, title, buttons }: BaseBlock): ReactElement => {
  return (
    <Container>
      <Grid container className={css.container} spacing={{ xs: 6, md: '30px' }} justifyContent="space-between">
        <Grid item md={6}>
          <img {...image} />
        </Grid>
        <Grid item md={6}>
          <Typography className={css.title} variant="h1" mb={5}>
            {title}
          </Typography>
          <Grid container gap={4} flexDirection="column" justifyContent="flex-start">
            <Grid item>
              <Grid container gap="10px" className={css.links}>
                <Grid item>
                  {buttons?.map(({ text, href }) => (
                    <Button
                      key={text}
                      href={href}
                      variant="contained"
                      target="_blank"
                      rel="noreferrer"
                      className={css.button}
                    >
                      {text}
                    </Button>
                  ))}
                </Grid>
                <Grid item>
                  <a href={IOS_LINK} target="_blank" rel="noreferrer" aria-label="AppStore download">
                    <IOSDownload />
                  </a>
                </Grid>
                <Grid item>
                  <a href={GPLAY_LINK} target="_blank" rel="noreferrer" aria-label="Google Play download">
                    <GPlayDownload />
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
    </Container>
  )
}

export default Intro
