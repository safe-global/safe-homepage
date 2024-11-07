import { useRef, useState } from 'react'
import { ButtonBase, Container, Typography } from '@mui/material'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'
import useResponsiveImages from '@/hooks/useResponsiveImages'
import type { BaseBlock } from '@/components/Home/types'
import type { ImageObj } from '@/hooks/useResponsiveImages'
import css from './styles.module.css'

const Hero = ({
  caption,
  title,
  text,
  buttons,
  items,
  image,
  backgroundImage,
}: BaseBlock & { backgroundImage: ImageObj }) => {
  const [bgImage] = useResponsiveImages(backgroundImage)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const playVideo = () => {
    videoRef.current?.play()
    setIsPlaying(true)
  }

  return (
    <>
      <Container className={css.container}>
        <div className={css.spot1} />
        <div className={css.spot2} />

        <div className={css.textBlock}>
          <Typography variant="caption" className={css.caption}>
            {caption}
          </Typography>

          <Typography variant="h1" className={css.title}>
            {title}
          </Typography>

          <Typography className={css.text}>{text}</Typography>

          <div className={css.buttonsWrapper}>
            <ButtonsWrapper buttons={buttons} />
          </div>
        </div>
      </Container>

      <div className={css.watchDemo}>
        {/* Networks image does not show in smaller resolutions */}
        <div className={css.bg} style={{ backgroundImage: `url(${bgImage})` }}>
          <div className={css.videoContainer}>
            <div className={`${css.playButton} ${isPlaying ? css.hidden : ''}`}>
              <ButtonBase onClick={playVideo}>
                <img src="/images/Wallet/play-button.png" alt="Play button" />
              </ButtonBase>

              <Typography>Watch demo</Typography>
            </div>

            <video ref={videoRef} controls={isPlaying} poster={image?.src} className={css.video}>
              <source src="/videos/Wallet/wallet-hero-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {!isPlaying && <div className={css.gradient} />}
      </div>

      <Container className={css.container} style={{ marginBottom: '210px' }}>
        <Typography variant="caption">They use Safe&#123;Wallet&#125;</Typography>

        {items ? (
          <div className={css.logosWrapper}>
            {items.map(({ image }, index) => (
              <img key={index} src={image?.src} alt={image?.alt} />
            ))}
          </div>
        ) : undefined}
      </Container>
    </>
  )
}

export default Hero
