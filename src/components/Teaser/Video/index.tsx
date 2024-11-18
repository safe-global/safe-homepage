import { useEffect, useRef, useState, type ReactElement } from 'react'
import { ButtonBase } from '@mui/material'
import { ALPHA_TELEGRAM_LINK } from '@/config/constants'
import LoadingLogo from '@/public/images/Teaser/loading.svg'
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
      {/* Loading state */}
      {!ready && <LoadingLogo className={css.loadingIndicator} />}

      <div className={`${css.videoWrapper} ${showButton ? css.hidden : ''}`}>
        {/* Video desktop */}
        <video
          autoPlay
          muted
          playsInline
          ref={videoRef}
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
          <source src="/videos/Teaser/Teaser_mobile.mp4" type="video/mp4" />
          <source src="/videos/Teaser/Teaser_mobile.webm" type="video/webm" />
        </video>
      </div>

      {ready ? (
        <div className={`${css.imageWrapper} ${showButton ? css.visible : ''}`}>
          <ButtonBase target="_blank" rel="noreferrer" href={ALPHA_TELEGRAM_LINK} className={css.button}>
            <img src="/images/Teaser/telegram.svg" alt="Telegram" className={css.image} />
          </ButtonBase>
        </div>
      ) : null}
    </div>
  )
}

export default Video
