import Logo from '@/public/images/logo.svg'
import css from './styles.module.css'
import { Box, Button, IconButton } from '@mui/material'
import { useRef, useState } from 'react'
import useScrollReveal from '@/hooks/useScrollReveal'
import HiddenXs from '@/public/images/Alpha/hidden-xs.svg'
import HiddenMd from '@/public/images/Alpha/hidden-md.svg'
import RedactedXs from '@/public/images/Alpha/redacted-xs.svg'
import RedactedSm from '@/public/images/Alpha/redacted-sm.svg'
import RedactedMd from '@/public/images/Alpha/redacted-md.svg'
import VisibilityEye from '@/public/images/Alpha/visibility-eye.svg'
import { useIsMediumScreen, useIsSmallScreen } from '@/hooks/useMaxWidth'

const Letter = () => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)
  const isButtonInViewport = useScrollReveal(elementRef, 100, false)

  const isSmallScreen = useIsSmallScreen()
  const isMediumScreen = useIsMediumScreen()

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev)
  }

  return (
    <div className={css.letterContainer}>
      <div className={`${css.card} ${css.under}`} />
      <div className={`${css.card} ${css.letter}`}>
        <div className={css.logoWrapper}>
          <Logo />

          <img src="/images/Alpha/safe-alpha-logo.png" alt="Safe Alpha logo" />
        </div>

        <Box textAlign="center">Bangkok, Thailand | 14 Nov, 2024</Box>

        <div className={css.redactedContainer}>
          {!isVisible ? (
            <IconButton className={css.visibilityIcon} onClick={toggleVisibility}>
              <VisibilityEye />
            </IconButton>
          ) : undefined}

          {!isVisible ? (
            isSmallScreen ? (
              <RedactedXs className={css.mask} />
            ) : isMediumScreen ? (
              <RedactedSm className={css.mask} />
            ) : (
              <RedactedMd className={css.mask} />
            )
          ) : undefined}

          <div className={`${!isVisible && css.hidden}`}>
            <div className={css.intro}>
              Dear Friend of Safe,
              <br />
              I’m thrilled to invite you to a secret event where we’ll give alpha on what Safe has been heads-down
              building beyond smart accounts and multi-sig. We will unveil the first look at{' '}
              <HiddenXs className={css.alwaysVisible} /> !
              <br />
              We believe this can redefine Ethereum experience as we know it and unlock new potential for the whole
              industry. Your presence would make this milestone even more meaningful.
            </div>

            <div className={css.invitation}>
              Join us on [14th Nov] at <HiddenMd className={css.alwaysVisible} />, as we reveal the future of Safe.
              Expect surprises and a sneak peek into what’s next.
              <br />
              <span className={css.alwaysVisible}>This is Alpha.</span> I look forward to sharing it with you.
            </div>

            <div className={`${css.cta} ${isButtonInViewport && css.inViewport}`}>
              <div ref={elementRef} className={css.rsvp}>
                <div>
                  <b>See you there!</b>
                </div>

                <Button variant="contained" size="large" className={css.alwaysVisible}>
                  RSVP
                </Button>
              </div>

              <div className={css.telegram}>
                <div>
                  Looking for <b>more Alpha</b>?
                </div>

                <Button variant="outlined" size="large" className={css.alwaysVisible}>
                  <img src="/images/telegram-logo.svg" alt="Telegram logo" />
                  Join telegram group
                </Button>
              </div>
            </div>
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
