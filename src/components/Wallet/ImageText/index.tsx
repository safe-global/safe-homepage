import type { ReactElement } from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import LinkButton from '@/components/common/LinkButton'

import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

export type ImageTextProps = {
  variant: 'image-text' | 'text-image'
  image: JSX.Element
  textBlock: {
    title: JSX.Element
    text: string
    subBlock?: ReactElement
    buttons?: {
      text: string
      href?: string
      variant: 'button' | 'link'
    }[]
  }
}

const ImageText = ({ image, textBlock, variant }: ImageTextProps): ReactElement => {
  const { title, text, subBlock, buttons } = textBlock

  return (
    <Container>
      <Grid
        container
        className={`${layoutCss.containerShort} ${variant === 'image-text' ? css.imageFirst : css.textFirst}`}
        spacing={{ xs: 6, md: '30px' }}
        justifyContent="space-between"
      >
        <Grid item md={5} display="flex" flexDirection="column" justifyContent="center" gap={{ xs: 3, md: 4 }}>
          <Typography variant="h2">{title}</Typography>
          <Typography>{text}</Typography>
          {subBlock}
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
        <Grid item md={6}>
          {image}
        </Grid>
      </Grid>
    </Container>
  )
}

export default ImageText
