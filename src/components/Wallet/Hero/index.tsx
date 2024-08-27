import { useRef, useState } from 'react'
import { ButtonBase, Container, Typography } from '@mui/material'
import { type BaseBlockEntry } from '@/config/types'
import RichText from '@/components/common/RichText'
import ButtonsWrapper from '@/components/Token/ButtonsWrapper'
import { isAsset, isEntryTypeBaseBlock, isEntryTypeButton } from '@/lib/typeGuards'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'
import css from './styles.module.css'

const Hero = (props: BaseBlockEntry) => {
  const isMediumScreen = useIsMediumScreen()
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const { caption, title, text, buttons, items, image, bgImage } = props.fields

  const buttonsList = buttons?.filter(isEntryTypeButton) ?? []
  const itemsList = items?.filter(isEntryTypeBaseBlock) ?? []

  const imageURL = isAsset(image) && image.fields.file?.url ? image.fields.file.url : ''
  const bgImageURL = isAsset(bgImage) && bgImage.fields.file?.url ? bgImage.fields.file.url : ''

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

          <div className={css.title}>
            <RichText {...title} />
          </div>

          {text && (
            <div className={css.text}>
              <RichText {...text} />
            </div>
          )}

          {buttonsList.length > 0 && <ButtonsWrapper buttons={buttonsList} />}
        </div>
      </Container>

      <div className={css.watchDemo}>
        {/* Networks image does not show in smaller resolutions */}
        <div className={css.bg} style={{ backgroundImage: `url(${!isMediumScreen ? bgImageURL : ''})` }}>
          <div className={css.videoContainer}>
            <div className={`${css.playButton} ${isPlaying ? css.hidden : ''}`}>
              <ButtonBase onClick={playVideo}>
                <img src="/images/Wallet/play-button.png" alt="Play button" />
              </ButtonBase>

              <Typography>Watch demo</Typography>
            </div>

            <video ref={videoRef} controls poster={imageURL} className={css.video}>
              <source src="/videos/Wallet/wallet-hero-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <Container className={css.container}>
        <Typography variant="caption">They use Safe&#123;Wallet&#125;</Typography>

        <div className={css.logosWrapper}>
          {itemsList.map((item, index) => {
            const { image } = item.fields

            const imageURL = isAsset(image) && image.fields.file?.url ? image.fields.file.url : ''

            return <img key={index} src={imageURL} alt="Logo" />
          })}
        </div>
      </Container>
    </>
  )
}

export default Hero
