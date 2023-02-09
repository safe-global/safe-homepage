import type { ReactElement } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import type { StepsType } from '@/components/Wallet/Stepper'
import layoutCss from '@/components/common/styles.module.css'
import Stepper from '@/components/Wallet/Stepper'

export type StackedTextImageBlockImageProps = {
  image: {
    src: string
    alt: string
  }
  textBlock: {
    title: string
    text: string
    steps: StepsType
  }
}

const TextStepperBlockImage = ({ image, textBlock }: StackedTextImageBlockImageProps): ReactElement => {
  const { title, text, steps } = textBlock

  return (
    <Container>
      <Grid
        container
        className={layoutCss.containerShort}
        spacing={{ xs: 6, md: '30px' }}
        justifyContent="space-between"
      >
        <Grid item md={5} display="flex" flexDirection="column" justifyContent="center" gap={{ xs: 3, md: 4 }}>
          <Typography variant="h2">{title}</Typography>
          <Typography>{text}</Typography>
          <Stepper steps={steps} />
        </Grid>
        <Grid item md={6}>
          <img {...image} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default TextStepperBlockImage
