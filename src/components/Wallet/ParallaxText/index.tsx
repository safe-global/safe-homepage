import { Box, Button, Container, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import imageTextCss from '@/components/Wallet/ImageText/styles.module.css'
import LinkButton from '@/components/common/LinkButton'
import ScrollParallax, { type ScrollParallaxProps } from '@/components/ScrollParallax'

type ParallaxTextProps = {
  variant: 'image-text' | 'text-image'
  parallax: ScrollParallaxProps
  textBlock: {
    title: string
    text: string
    buttons?: {
      text: string
      href?: string
      variant: 'button' | 'link'
    }[]
  }
}

const ParallaxText = ({ parallax, textBlock, variant }: ParallaxTextProps) => {
  const { title, text, buttons } = textBlock

  return (
    <Container disableGutters>
      <Grid
        container
        className={`${layoutCss.containerShort} ${
          variant === 'image-text' ? imageTextCss.imageFirst : imageTextCss.textFirst
        }`}
        spacing={{ xs: 6, md: '30px' }}
        justifyContent="space-between"
      >
        <Grid item md={5} display="flex" flexDirection="column" justifyContent="center" gap={{ xs: 3, md: 4 }}>
          <Typography variant="h2">{title}</Typography>
          <Typography>{text}</Typography>
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
          <ScrollParallax {...parallax} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default ParallaxText
