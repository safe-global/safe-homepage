import Card from '@/components/Rewards/Card'
import PulsingCircles from '@/components/Rewards/PulsingCircles'
import OrbitLines from '@/components/Rewards/OrbitLines'
import { type BaseBlockEntry } from '@/config/types'
import css from './styles.module.css'
import RichText from '@/components/common/RichText'
import ButtonsWrapper from '@/components/Token/ButtonsWrapper'
import { isEntryTypeButton } from '@/lib/typeGuards'
import { Container, Typography } from '@mui/material'
import StarGradientIcon from '@/public/images/star-gradient.svg'

const SafePass = (props: BaseBlockEntry) => {
  const { caption, title, buttons } = props.fields

  const buttonsList = buttons?.filter(isEntryTypeButton) || []

  return (
    <Container className={css.container}>
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

      <div className={css.animationContainer}>
        <Card {...props} />
        <OrbitLines />
        <PulsingCircles />
      </div>
    </Container>
  )
}

export default SafePass
