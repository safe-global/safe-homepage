import Logo from '@/public/images/logo.svg'
import css from './styles.module.css'
import { Box, Button } from '@mui/material'
import { useRef } from 'react'
import useScrollReveal from '@/hooks/useScrollReveal'

const Letter = () => {
  const elementRef = useRef<HTMLDivElement>(null)
  const isVisible = useScrollReveal(elementRef, 100, false)

  return (
    <div className={css.letterContainer}>
      <div className={`${css.card} ${css.under}`} />
      <div className={`${css.card} ${css.letter}`}>
        <div className={css.logoWrapper}>
          <Logo />

          <img src="/images/alpha-circle.png" alt="Alpha logo circled" height="100%" />
        </div>

        <Box textAlign="center">Bangkok, Thailand | 14 Nov, 2024</Box>

        <div className={css.intro}>
          Dear Friend of Safe,
          <br />
          I’m thrilled to invite you to a secret event where we’ll give alpha on what Safe has been heads-down building
          beyond smart accounts and multi-sig. We will unveil the first look at <span>hidden</span>!<br />
          We believe this can redefine Ethereum experience as we know it and unlock new potential for the whole
          industry. Your presence would make this milestone even more meaningful.
        </div>

        <div className={css.invitation}>
          Join us on [14th Nov] at <span>hidden</span>, as we reveal the future of Safe. Expect surprises and a sneak
          peek into what’s next. This is Alpha. I look forward to sharing it with you.
        </div>

        <div className={`${css.cta} ${isVisible && css.inViewport}`}>
          <div ref={elementRef} className={css.rsvp}>
            <div>
              <b>See you there!</b>
            </div>

            <Button variant="contained" size="large">
              RSVP
            </Button>
          </div>

          <div className={css.telegram}>
            <div>
              Looking for <b>more Alpha</b>?
            </div>

            <Button variant="outlined" size="large">
              <img src="/images/telegram-logo.svg" alt="Telegram logo" />
              Join telegram group
            </Button>
          </div>
        </div>

        <div className={css.signature}>
          Best,
          <br />
          Lukas Schor
          <br />
          {`Co-founder,{Safe}`}
          <br />
          PS: Don&apos;t tell anyone!
        </div>
      </div>
    </div>
  )
}

export default Letter
