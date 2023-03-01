import type { BaseBlock } from '@/components/Home/types'
import { Chip, Container, Grid, type Theme, Typography, useMediaQuery } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import LinkButton from '@/components/common/LinkButton'
import clsx from 'clsx'
import Link from 'next/link'
import { RELAY_KIT_LINK, ONRAMP_KIT_LINK, AUTH_KIT_LINK, PROTOCOL_KIT_LINK } from '@/config/constants'

const AASdk = ({ title, caption, text, link }: BaseBlock) => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <Container>
      <Grid container className={layoutCss.containerMedium}>
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
          {link && (
            <Link href={link.href} target="_blank" rel="noreferrer" passHref>
              <LinkButton sx={{ width: 'fit-content' }}>{link?.title}</LinkButton>
            </Link>
          )}
        </Grid>
        <div className={css.videoWrapper}>
          <video autoPlay muted loop className={css.video}>
            <source src={isSmallScreen ? '/videos/aa-sdk-mobile.webm' : '/videos/aa-sdk.webm'} type="video/webm" />
            <source src={isSmallScreen ? '/videos/aa-sdk-mobile.mp4' : '/videos/aa-sdk.mp4'} type="video/mp4" />
            <img src="/images/aa-sdk.png" alt="AA SDK Overview" />
          </video>
          <a className={clsx(css.videoLink, css.authKitLink)} href={AUTH_KIT_LINK} target="_blank" rel="noreferrer">
            Auth Kit
          </a>
          <a className={clsx(css.videoLink, css.onRampKitLink)} href={ONRAMP_KIT_LINK} target="_blank" rel="noreferrer">
            Onramp Kit
          </a>
          <a className={clsx(css.videoLink, css.relayKitLink)} href={RELAY_KIT_LINK} target="_blank" rel="noreferrer">
            Relay Kit
          </a>
          <a
            className={clsx(css.videoLink, css.protocolKitLink)}
            href={PROTOCOL_KIT_LINK}
            target="_blank"
            rel="noreferrer"
          >
            Protocol Kit
          </a>
        </div>
      </Grid>
    </Container>
  )
}

export default AASdk
