import type { ReactNode } from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import LinkButton from '@/components/common/LinkButton'
import type { BaseBlock } from '@/components/Home/types'
import Stepper, { type StepsType } from '@/components/Wallet/Stepper'
import Link from 'next/link'
import clsx from 'clsx'

export type ParallaxTextProps = BaseBlock & {
  variant: 'image-text' | 'text-image'
}

const ParallaxText = ({
  title,
  text,
  buttons,
  steps,
  caption,
  variant,
  children,
}: ParallaxTextProps & { children: ReactNode; steps?: StepsType }) => {
  return (
    <Container disableGutters>
      <Grid
        container
        className={clsx(layoutCss.containerMedium, variant === 'image-text' ? css.imageFirst : css.textFirst)}
        spacing={{ xs: 6, md: '30px' }}
        justifyContent="space-between"
      >
        <Grid item xs={12} md={5} display="flex" flexDirection="column" justifyContent="center" gap={{ xs: 3, md: 4 }}>
          {caption && (
            <Typography variant="caption" component="div">
              {caption}
            </Typography>
          )}
          <Typography variant="h2">{title}</Typography>
          <Typography>{text}</Typography>
          {steps && <Stepper steps={steps} />}
          {buttons ? (
            <Box display="flex" gap={3}>
              {buttons.map((button, index) => {
                const { text, variant, href } = button
                const isButton = variant === 'button'
                if (isButton) {
                  return (
                    <Button key={index} href={href} variant="contained" size="large" target="_blank" rel="noreferrer">
                      {text}
                    </Button>
                  )
                }
                return (
                  <Link key={index} href={href} passHref target="_blank" rel="noreferrer">
                    <LinkButton>{text}</LinkButton>
                  </Link>
                )
              })}
            </Box>
          ) : null}
        </Grid>
        <Grid xs={12} md={6} display="flex" alignItems="center">
          {children}
        </Grid>
      </Grid>
    </Container>
  )
}

export default ParallaxText
