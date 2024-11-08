import { useEffect, useRef, useState, type ReactElement } from 'react'
import { ButtonBase } from '@mui/material'
import css from './styles.module.css'
import { ALPHA_TELEGRAM_LINK } from '@/config/constants'

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
          poster="/images/Teaser/poster.png"
          autoPlay
          muted
          playsInline
          ref={videoRef}
          style={{ opacity: 0 }}
          onEnded={handleVideoEnd}
          className={`${css.video} ${ready ? css.ready : ''}`}
        >
          {/* TODO: Replace by Teaser_with_logo.mp4 */}
          <source src="/videos/Teaser/Teaser.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={`${css.imageWrapper} ${showButton ? css.visible : ''}`}>
        <ButtonBase target="_blank" rel="noreferrer" href={ALPHA_TELEGRAM_LINK} className={css.button}>
          <img src="/images/Teaser/telegram.svg" alt="Telegram" />
        </ButtonBase>
      </div>
    </div>
  )
}

export default Video
