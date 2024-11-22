import { Button, Container, Typography } from '@mui/material'
import LinkButton from '@/components/common/LinkButton'
import SafenetLogo from '@/public/images/Safenet/Safenet-logo.svg'
import css from './styles.module.css'

const title = "Moving the World's GDP onchain"
const text =
  'Powered by Safe, Processor and Liquidity Network enables DeFi users to transact anywhere, offering unprecedented speed, guaranteed execution and security.'

const Hero = () => {
  return (
    <div className={css.anchor}>
      <div className={`${css.backgroundArc} ${css.upperArc}`} />
      <div className={`${css.backgroundArc} ${css.lowerArc}`} />

      <Container className={css.container}>
        <video autoPlay muted playsInline loop className={css.video}>
          <source src="/videos/Safenet/Logo.webm" type="video/webm" />
        </video>

        <div className={css.contentWrapper}>
          <div className={css.captionWrapper}>
            Introducing
            <SafenetLogo className={css.logo} />
          </div>

          <Typography variant="h2" className={css.title}>
            <>{title}</>
          </Typography>

          <Typography className={css.text}>{text}</Typography>
        </div>

        <div className={css.buttonsWrapper}>
          <Button variant="contained" size="large" className={css.gradientButton}>
            Join waitinglist
          </Button>

          <LinkButton>Our vision</LinkButton>
        </div>
      </Container>
    </div>
  )
}

export default Hero
