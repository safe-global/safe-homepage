import type { ReactNode } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import type { BaseBlock } from '@/components/Home/types'
import Stepper, { type StepsType } from '@/components/Wallet/Stepper'
import clsx from 'clsx'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'

export type ParallaxTextProps = BaseBlock & {
  variant: 'image-text' | 'text-image'
  mobileVariant?: 'image-text' | 'text-image'
}

// TODO: This component should be deleted when every page content is fetched from the CMS rather than hardcoded in the /content folder
const ParallaxText = ({
  title,
  text,
  buttons,
  steps,
  caption,
  variant,
  mobileVariant = 'image-text',
  children,
}: ParallaxTextProps & { children: ReactNode; steps?: StepsType }) => {
  return (
    <Container>
      <Grid
        container
        className={clsx(
          layoutCss.containerMedium,
          variant === 'image-text' ? css.imageFirst : css.textFirst,
          mobileVariant === 'text-image' ? css.textFirstMobile : null,
        )}
        spacing={{ xs: 6, md: '30px', xl: '50px' }}
        justifyContent="space-between"
      >
        <Grid item xs={12} md={5} display="flex" flexDirection="column" justifyContent="center" gap={{ xs: 3, md: 4 }}>
          {caption && (
            <Typography variant="caption" component="div">
              {caption}
            </Typography>
          )}
          <Typography variant="h2">{title}</Typography>
          <Typography className={css.textBlock}>{text}</Typography>
          {steps && <Stepper steps={steps} />}
          <ButtonsWrapper buttons={buttons} />
        </Grid>
        <Grid item xs={12} md={6} display="flex" alignItems="center">
          {children}
        </Grid>
      </Grid>
    </Container>
  )
}

export default ParallaxText
