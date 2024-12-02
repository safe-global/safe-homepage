import { Button, Container, Typography } from '@mui/material'
import LinkButton from '@/components/common/LinkButton'
import { SAFENET_TELEGRAM_LINK, SAFENET_WAITING_LIST_LINK } from '@/config/constants'
import SafenetLogoGradient from '@/public/images/Safenet/Safenet-logo-gradient.svg'
import css from './styles.module.css'

const Hero = () => (
  <div className={css.anchor}>
    <div className={`${css.backgroundArc} ${css.upperArc}`} />
    <div className={`${css.backgroundArc} ${css.lowerArc}`} />

    <Container className={css.container}>
      <video autoPlay muted playsInline loop className={css.video} poster="/images/Safenet/globe-poster.png">
        <source src="/videos/Safenet/Globe.webm" type="video/webm" />
        <source src="/videos/Safenet/Globe.mp4" type="video/mp4" />
        <img src="/images/Safenet/globe-poster.png" alt="Safenet globe" />
      </video>

      <div className={css.contentWrapper}>
        <div className={css.captionWrapper}>
          Introducing
          <SafenetLogoGradient className={css.logo} />
        </div>

        <Typography variant="h2" className={css.title}>
          Moving the World&apos;s GDP onchain
        </Typography>

        <Typography className={css.text}>
          Single unified balance. Instant cross-chain transactions.
          <br />
          Execution guarantees. On any network.
        </Typography>
      </div>

      <div className={css.buttonsWrapper}>
        <Button href={SAFENET_TELEGRAM_LINK} variant="contained" size="large" className={css.gradientButton}>
          Get updates
        </Button>

        <a href={SAFENET_WAITING_LIST_LINK} target="_blank" rel="noreferrer">
          <LinkButton>Join Waitlist</LinkButton>
        </a>
      </div>

      <div className={css.scroll} />
    </Container>
  </div>
)

export default Hero
