import { Container, Grid, Typography } from '@mui/material'
import IOSDownload from '@/public/images/ios-download.svg'
import GPlayDownload from '@/public/images/google-play-download.svg'
import css from './styles.module.css'
import layoutCss from '@/components/common/styles.module.css'
import { IOS_LINK, GPLAY_LINK } from '@/config/constants'

const TextBlockBanner = () => (
  <div className={css.gradient}>
    <Container>
      <Grid
        container
        className={layoutCss.containerMedium}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item md={6} sx={{ textAlign: 'center' }} pt={12}>
          <Typography variant="h2" color="static.main" mb={3}>
            Use Safe <u>WALLET</u> anywhere
          </Typography>
          <Typography color="static.main" mb={5}>
            Access your assets anywhere without compromising on security with our flagship interfaces built on Safe Core
          </Typography>
        </Grid>
        <Grid item md={8}>
          <Grid container gap={2} justifyContent="center">
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
      <div className={css.bg} />
    </Container>
  </div>
)

export default TextBlockBanner
