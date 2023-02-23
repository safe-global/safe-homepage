import type { BaseBlock } from '@/components/Home/types'
import { Chip, Container, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import LinkButton from '@/components/common/LinkButton'
import clsx from 'clsx'

const AASdk = ({ title, caption, text, link }: BaseBlock) => {
  return (
    <Container className={css.wrapper}>
      <Grid container className={layoutCss.containerShort}>
        <Grid item md={8} display="flex" flexDirection="column" justifyContent="center" gap={{ xs: 3, md: 4 }} mb={5}>
          <Chip
            label={
              <Typography variant="caption" color="primary.main">
                {caption}
              </Typography>
            }
            className={css.chip}
            variant="outlined"
          />
          <Typography variant="h2">{title}</Typography>
          {text && <Typography>{text}</Typography>}
          <LinkButton href={link?.href} sx={{ width: 'fit-content' }}>
            {link?.title}
          </LinkButton>
        </Grid>
        <div className={css.videoWrapper}>
          <video autoPlay muted loop className={css.video}>
            <source src="/videos/aa-sdk.webm" type="video/webm" />
          </video>
          <a className={clsx(css.videoLink, css.authKitLink)} href="#">
            Auth Kit
          </a>
          <a className={clsx(css.videoLink, css.onRampKitLink)} href="#">
            Onramp Kit
          </a>
          <a className={clsx(css.videoLink, css.relayKitLink)} href="#">
            Relay Kit
          </a>
          <a className={clsx(css.videoLink, css.protocolKitLink)} href="#">
            Protocol Kit
          </a>
        </div>
      </Grid>
    </Container>
  )
}

export default AASdk
