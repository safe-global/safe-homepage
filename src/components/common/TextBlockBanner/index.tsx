import { Button, Container, Grid, Typography } from '@mui/material'
import IOSDownload from '@/public/images/ios-download.svg'
import GPlayDownload from '@/public/images/google-play-download.svg'
import DownloadIcon from '@/public/images/download-icon.svg'
import css from './styles.module.css'
import { IOS_LINK, GPLAY_LINK } from '@/config/constants'
import SafeWalletText from '@/components/common/SafeWalletText'
import SafeCoreText from '@/components/common/SafeCoreText'

const TextBlockBanner = () => (
  <div className={css.bg}>
    <Container>
      <Grid container flexDirection="column" alignItems="center" justifyContent="center">
        <Grid item md={6} sx={{ textAlign: 'center' }} pt={12}>
          <Typography variant="h2" color="static.main" mb={3}>
            Use <SafeWalletText variant="h2" /> anywhere
          </Typography>
          <Typography color="static.main" mb={5}>
            Access your assets anywhere without compromising on security on our flagship interfaces built on{' '}
            <Typography component="span">
              <SafeCoreText variant="body1" />
            </Typography>
            .
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
            <Grid item>
              <Button variant="contained" color="secondary" size="large" disableRipple startIcon={<DownloadIcon />}>
                Download desktop
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </div>
)

export default TextBlockBanner
