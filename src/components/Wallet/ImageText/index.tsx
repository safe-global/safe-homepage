import type { ReactElement } from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import LinkButton from '@/components/common/LinkButton'

import layoutCss from '@/components/common/styles.module.css'

export type ImageTextProps = {
  variant: 'image-text' | 'text-image'
  image: JSX.Element
  textBlock: {
    title: JSX.Element
    text: string
    buttons: {
      text: string
      href?: string
      variant: 'button' | 'link'
    }[]
  }
}

const ImageText = ({ image, textBlock, variant }: ImageTextProps): ReactElement => {
  const { title, text, buttons } = textBlock

  return (
    <Container>
      <Grid
        container
        className={layoutCss.containerShort}
        direction={`${variant === 'image-text' ? 'row' : 'row-reverse'}`}
        spacing="130px"
      >
        <Grid item md={6}>
          <Typography variant="h2" mb={4}>
            {title}
          </Typography>
          <Typography mb={5}>{text}</Typography>
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
        </Grid>
        <Grid item md={6}>
          {image}
        </Grid>
      </Grid>
    </Container>
  )
}

export default ImageText
