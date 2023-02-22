import type { ReactElement } from 'react'
import { Button, Container, Divider, Grid, Typography } from '@mui/material'
import { IOS_LINK, GPLAY_LINK } from '@/config/constants'
import IOSDownload from '@/public/images/ios-download.svg'
import GPlayDownload from '@/public/images/google-play-download.svg'
import type { BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'

const Intro = ({ image, title, buttons, gif }: BaseBlock & { gif: BaseBlock['image'] }): ReactElement => {
  return (
    <Container>
      <Grid
        container
        className={css.container}
        spacing={{ xs: 6, md: '30px' }}
        justifyContent="space-between"
        mt="10px"
        mb={1}
      >
        <Grid item md={6} className={css.imagesWrapper}>
          <img {...gif} className={css.gif} />
          <img {...image} className={css.image} />
        </Grid>
        <Grid item md={6}>
          <Typography className={css.title} variant="h1" mb={5}>
            {title}
          </Typography>
          <Grid container gap={4} flexDirection="column" justifyContent="flex-start">
            <Grid item>
              <Grid container gap={{ xs: 4, md: '10px' }}>
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
                <div className={css.downloads}>
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
                </div>
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
