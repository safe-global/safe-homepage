import Card from '@/components/Rewards/Card'
import PulsingCircles from '@/components/Rewards/PulsingCircles'
import OrbitLines from '@/components/Rewards/OrbitLines'
import { type BaseBlockEntry } from '@/config/types'
import RichText from '@/components/common/RichText'
import ButtonsWrapper from '@/components/Token/ButtonsWrapper'
import { isEntryTypeBaseBlock, isEntryTypeButton } from '@/lib/typeGuards'
import { Container, Typography } from '@mui/material'
import StarGradientIcon from '@/public/images/star-gradient.svg'
import css from './styles.module.css'
import { IconCarouselElement } from '@/components/Rewards/IconCarousel'

const SafePass = (props: BaseBlockEntry) => {
  const { caption, title, buttons, items } = props.fields

  const buttonsList = buttons?.filter(isEntryTypeButton) || []
  const itemsList = items?.filter(isEntryTypeBaseBlock) || []

  return (
    <Container className={css.container}>
      <div className={css.spot1} />
      <div className={css.spot2} />
      <div className={css.textBlock}>
        <div className={css.headline}>
          <StarGradientIcon />
          <Typography variant="h4" className={css.caption}>
            {caption}
          </Typography>
        </div>

        <div className={css.title}>
          <RichText {...title} />
        </div>

        {buttonsList.length > 0 && (
          <div className={css.buttons}>
            <ButtonsWrapper buttons={buttonsList} />
          </div>
        )}
      </div>

      <div className={css.spot3} />
      <div className={css.animationContainer}>
        <Card {...props} />
        <OrbitLines />
        <PulsingCircles />
      </div>

      <div className={css.partnershipWrapper}>
        <Typography color="primary.light">in partnership with</Typography>
        <IconCarouselElement items={itemsList} />
      </div>
    </Container>
  )
}

export default SafePass
