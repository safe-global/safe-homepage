import { Button, Container, Grid, Typography } from '@mui/material'
import IOSDownload from '@/public/images/ios-download.svg'
import GPlayDownload from '@/public/images/google-play-download.svg'
import DownloadIcon from '@/public/images/download-icon.svg'
import css from './styles.module.css'
import { IOS_LINK, GPLAY_LINK } from '@/config/constants'

const WalletDownload = () => {
  return (
    <div className={css.bg}>
      <Container>
        <Grid container flexDirection="column" alignItems="center" justifyContent="center">
          <Grid item md={6} sx={{ textAlign: 'center' }} pt={12}>
            <Typography variant="h1" color="static.main" mb={3}>
              Access your Safe Wallet anywhere
            </Typography>
            <Typography color="static.main" mb={5}>
              Access the best of Safe Protocol on Web, Mobile and Desktop.
            </Typography>
          </Grid>
          <Grid item md={8}>
            <Grid container gap={2} justifyContent="center">
              <Grid item>
                <a href={IOS_LINK} target="_blank" rel="noreferrer">
                  <IOSDownload />
                </a>
              </Grid>
              <Grid item>
                <a href={GPLAY_LINK} target="_blank" rel="noreferrer">
                  <GPlayDownload />
                </a>
              </Grid>
              <Grid item>
                <Button variant="contained" color="secondary" size="large" disableRipple startIcon={<DownloadIcon />}>
                  Download app
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default WalletDownload
