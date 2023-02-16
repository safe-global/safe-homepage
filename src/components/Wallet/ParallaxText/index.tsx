import type { ReactNode } from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import LinkButton from '@/components/common/LinkButton'
import type { TextBlock } from '@/components/Home/types'
import clsx from 'clsx'
import Stepper from '@/components/Wallet/Stepper'

export type ParallaxTextProps = TextBlock & {
  variant: 'image-text' | 'text-image'
}

const ParallaxText = ({ textBlock, variant, children }: ParallaxTextProps & { children: ReactNode }) => {
  const { title, text, buttons, steps } = textBlock

  return (
    <Container disableGutters>
      <Grid
        container
        className={clsx(layoutCss.containerShort, variant === 'image-text' ? css.imageFirst : css.textFirst)}
        spacing={{ xs: 6, md: '30px' }}
        justifyContent="space-between"
      >
        <Grid item md={5} display="flex" flexDirection="column" justifyContent="center" gap={{ xs: 3, md: 4 }}>
          <Typography variant="h2">{title}</Typography>
          <Typography>{text}</Typography>
          {steps && <Stepper steps={steps} />}
          {buttons ? (
            <Box display="flex" gap={3}>
              {buttons.map((button) => {
                const { text, variant, href } = button
                const isButton = variant === 'button'
                if (isButton) {
                  return (
                    <Button key={text} href={href} variant="contained" size="large">
                      {text}
                    </Button>
                  )
                }
                return (
                  <LinkButton key={text} href={href}>
                    {text}
                  </LinkButton>
                )
              })}
            </Box>
          ) : null}
        </Grid>
        <Grid item xs={12} md={6}>
          {children}
        </Grid>
      </Grid>
    </Container>
  )
}

export default ParallaxText
