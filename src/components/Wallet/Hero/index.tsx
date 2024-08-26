import { Container, Typography } from '@mui/material'
import { type BaseBlockEntry } from '@/config/types'
import RichText from '@/components/common/RichText'
import ButtonsWrapper from '@/components/Token/ButtonsWrapper'
import { isAsset, isEntryTypeBaseBlock, isEntryTypeButton } from '@/lib/typeGuards'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'
import css from './styles.module.css'

const Hero = (props: BaseBlockEntry) => {
  const isMediumScreen = useIsMediumScreen()
  const { caption, title, text, buttons, items, bgImage } = props.fields

  const buttonsList = buttons?.filter(isEntryTypeButton) || []
  const itemsList = items?.filter(isEntryTypeBaseBlock) ?? []

  const bgImageURL = isAsset(bgImage) && bgImage.fields.file?.url ? bgImage.fields.file.url : ''

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
            <video controls className={css.video}>
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
