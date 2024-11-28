import { Button, Container, Typography } from '@mui/material'
import LinkButton from '@/components/common/LinkButton'
import SafenetLogoGradient from '@/public/images/Safenet/Safenet-logo-gradient.svg'
import css from './styles.module.css'

const title = "Moving the World's GDP onchain"
const text = 'Single unified balance. Instant cross-chain transactions. Execution guarantees. On any network.'

const Hero = () => (
  <div className={css.anchor}>
    <div className={`${css.backgroundArc} ${css.upperArc}`} />
    <div className={`${css.backgroundArc} ${css.lowerArc}`} />

    <Container className={css.container}>
      <video autoPlay muted playsInline loop className={css.video}>
        <source src="/videos/Safenet/Globe.webm" type="video/webm" />
      </video>

      <div className={css.contentWrapper}>
        <div className={css.captionWrapper}>
          Introducing
          <SafenetLogoGradient className={css.logo} />
        </div>

        <Typography variant="h2" className={css.title}>
          <>{title}</>
        </Typography>

        <Typography className={css.text}>{text}</Typography>
      </div>

      <div className={css.buttonsWrapper}>
        <Button variant="contained" size="large" className={css.gradientButton}>
          Get updates
        </Button>

        <LinkButton>Join Waitinglist</LinkButton>
      </div>

      <div className={css.scroll} />
    </Container>
  </div>
)

export default Hero
