import { useEffect, useRef, useState, type ReactElement } from 'react'
import css from './styles.module.css'

export const Teaser = (): ReactElement => {
  const [ready, setReady] = useState(false)

  const videoRef = useRef<HTMLVideoElement>(null)

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
    <div>
      <video
        autoPlay
        muted
        playsInline
        ref={videoRef}
        style={{ opacity: 0 }}
        className={`${css.video} ${ready ? css.ready : ''}`}
      >
        {/* <source src="/videos/Teaser/Teaser.webm" type="video/webm" /> */}
        <source src="/videos/Teaser/Teaser.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
