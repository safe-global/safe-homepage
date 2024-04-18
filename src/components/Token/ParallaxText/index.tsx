import type { ReactNode } from 'react'
import { Container, Grid } from '@mui/material'
import clsx from 'clsx'
import { type BaseBlockEntry } from '@/config/types'
import RichText from '@/components/common/RichText'
import ButtonsWrapper from '@/components/Token/ButtonsWrapper'
import { isEntryTypeButton } from '@/lib/typeGuards'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

export type ParallaxTextProps = BaseBlockEntry & {
  variant: 'image-text' | 'text-image'
  children: ReactNode
}

const ParallaxText = (props: ParallaxTextProps) => {
  const { title, buttons } = props.fields
  const { variant, children } = props

  const buttonsList = buttons?.filter(isEntryTypeButton) || []

  return (
    <Container>
      <Grid
        container
        className={clsx(layoutCss.containerMedium, variant === 'image-text' ? css.imageFirst : css.textFirst)}
        spacing={{ xs: 6, md: '30px', xl: '50px' }}
        justifyContent="space-between"
      >
        <Grid item xs={12} md={5} display="flex" flexDirection="column" justifyContent="center">
          <RichText {...title} />
          <ButtonsWrapper buttons={buttonsList} />
        </Grid>

        <Grid item xs={12} md={6} display="flex" alignItems="center">
          {children}
        </Grid>
      </Grid>
    </Container>
  )
}

export default ParallaxText
