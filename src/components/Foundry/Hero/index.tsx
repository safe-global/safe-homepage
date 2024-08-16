import { type BaseBlockEntry } from '@/config/types'
import RichText from '@/components/common/RichText'
import ButtonsWrapper from '@/components/Token/ButtonsWrapper'
import { isAsset, isEntryTypeButton } from '@/lib/typeGuards'
import { Container, Typography } from '@mui/material'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'
import css from './styles.module.css'

const Hero = (props: BaseBlockEntry) => {
  const isMediumScreen = useIsMediumScreen()
  const { title, text, buttons, image, bgImage } = props.fields

  const buttonsList = buttons?.filter(isEntryTypeButton) || []

  const imageURL = isAsset(image) && image.fields.file?.url ? image.fields.file.url : ''
  const bgImageURL = isAsset(bgImage) && bgImage.fields.file?.url ? bgImage.fields.file.url : ''

  return (
    <div className={css.bg} style={{ backgroundImage: `url(${bgImageURL})` }}>
      <div className={css.gradientHorizontal}>
        <div className={css.spot1} />
        <div className={css.spot2} />

        {/* Networks image does not show in smaller resolutions */}
        <div className={css.image} style={{ backgroundImage: `url(${!isMediumScreen ? imageURL : ''})` }}>
          <Container className={css.container}>
            <img src="/images/safe-foundry-logo.png" alt="Safe Foundry logo" className={css.logo} />

            <div className={css.textBlock}>
              <Typography variant="h1" className={css.title}>
                <RichText {...title} />
              </Typography>

              {text && (
                <div className={css.text}>
                  <RichText {...text} />
                </div>
              )}

              {buttonsList.length > 0 && (
                <div className={css.buttons}>
                  <ButtonsWrapper buttons={buttonsList} />
                </div>
              )}
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default Hero
