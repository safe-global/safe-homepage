import { useEffect, useRef, useState, type ReactElement } from 'react'
import { ButtonBase } from '@mui/material'
// import Logo from '@/public/images/Teaser/logo_safenet.svg'
import { ALPHA_TELEGRAM_LINK } from '@/config/constants'
import css from './styles.module.css'

const Video = (): ReactElement => {
  const [ready, setReady] = useState(false)
  const [showButton, setShowButton] = useState(false)

  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoEnd = () => {
    setShowButton(true)
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
        <video
          autoPlay
          muted
          playsInline
          ref={videoRef}
          style={{ opacity: 0 }}
          onEnded={handleVideoEnd}
          className={`${css.video} ${ready ? css.ready : ''}`}
        >
          <source src="/videos/Teaser/Teaser_with_logo.mp4" type="video/mp4" />
          <source src="/videos/Teaser/Teaser_with_logo.webm" type="video/webm" />
        </video>
      </div>
      {ready ? (
        <div className={`${css.imageWrapper} ${showButton ? css.visible : ''}`}>
          <ButtonBase
            target="_blank"
            rel="noreferrer"
            href={ALPHA_TELEGRAM_LINK}
            // className={`${css.button} ${showButton ? css.visible : ''}`}
            className={css.button}
          >
            {/* <Logo className={`${css.logo} ${!showLogo ? css.hidden : ''}`} /> */}
            <img
              src="/images/Teaser/telegram.svg"
              alt="Telegram"
              // className={`${css.image} ${!showLogo ? css.slideUp : ''}`}
              className={css.image}
            />
          </ButtonBase>
        </div>
      ) : null}
    </div>
  )
}

export default Video
