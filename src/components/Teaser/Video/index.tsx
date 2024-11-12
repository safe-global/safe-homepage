import { useEffect, useRef, useState, type ReactElement } from 'react'
import { ButtonBase } from '@mui/material'
import Logo from '@/public/images/Teaser/logo_safenet.svg'
import { ALPHA_TELEGRAM_LINK } from '@/config/constants'
import { useIsSmallScreen } from '@/hooks/useMaxWidth'
import css from './styles.module.css'

const Video = (): ReactElement => {
  const [ready, setReady] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [showLogo, setShowLogo] = useState(true)
  const [showMobileButton, setShowMobileButton] = useState(false)
  const isMobile = useIsSmallScreen()

  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoEnd = () => {
    setShowButton(true)

    if (!isMobile) return

    // Hide the logo after 3 seconds
    setTimeout(() => {
      setShowLogo(false)

      // Show the mobile button after 3 seconds
      setTimeout(() => {
        setShowMobileButton(true)
      })
    }, 3000)
  }

  useEffect(() => {
    const poll = setInterval(() => {
      if (!videoRef.current) return
      if (videoRef.current.readyState >= videoRef.current.HAVE_FUTURE_DATA) {
        setReady(true)
        clearInterval(poll)
      }
    }, 100)

    return () => clearInterval(poll)
  }, [])

  return (
    <div className={css.container}>
      <div className={`${css.videoWrapper} ${showButton ? css.hidden : ''}`}>
        {/* Video desktop */}
        <video
          autoPlay
          muted
          playsInline
          ref={videoRef}
          style={{ opacity: 0 }}
          onEnded={handleVideoEnd}
          className={`${css.video} ${css.desktopVideo} ${ready ? css.ready : ''}`}
        >
          <source src="/videos/Teaser/Teaser_with_logo.mp4" type="video/mp4" />
          <source src="/videos/Teaser/Teaser_with_logo.webm" type="video/webm" />
        </video>
        {/* Video mobile */}
        <video
          autoPlay
          muted
          playsInline
          ref={videoRef}
          style={{ opacity: 0 }}
          onEnded={handleVideoEnd}
          className={`${css.video} ${css.mobileVideo} ${ready ? css.ready : ''}`}
        >
          <source src="/videos/Teaser/Teaser_no_logo.mp4" type="video/mp4" />
          <source src="/videos/Teaser/Teaser_no_logo.webm" type="video/webm" />
        </video>
      </div>
      {ready ? (
        <div className={`${css.imageWrapper} ${showButton ? css.visible : ''}`}>
          <ButtonBase target="_blank" rel="noreferrer" href={ALPHA_TELEGRAM_LINK} className={css.button}>
            {isMobile ? <Logo className={`${css.logo} ${!showLogo ? css.hidden : css.show}`} /> : null}

            <img
              src="/images/Teaser/telegram.svg"
              alt="Telegram"
              className={`${css.image} ${showMobileButton ? css.slideUp : ''}`}
            />
          </ButtonBase>
        </div>
      ) : null}
    </div>
  )
}

export default Video
