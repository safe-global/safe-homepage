import { Box, Button, Container, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import LinkButton from '@/components/common/LinkButton'
import css from './styles.module.css'
import ParallaxWrapper from '@/components/common/ParallaxWrapper'
import { type ParallaxProps } from '@/hooks/useScrollParallax'

type ParallaxTextProps = {
  variant: 'image-text' | 'text-image'
  parallax: {
    baseImage: {
      src: string
      alt: string
    }
    layers: Array<
      ParallaxProps & {
        image: {
          src: string
          alt: string
        }
      }
    >
  }
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
  const { baseImage, layers } = parallax

  return (
    <Container disableGutters>
      <Grid
        container
        className={`${layoutCss.containerShort} ${variant === 'image-text' ? css.imageFirst : css.textFirst}`}
        spacing={{ xs: 6, md: '30px' }}
        justifyContent="space-between"
      >
        <Grid item xs={12} md={6}>
          <div className={css.parallaxWrapper}>
            <img src={baseImage.src} alt={baseImage.alt} />
            {layers.map(({ image, translateX, translateY, depth, direction }, index) => (
              <ParallaxWrapper
                key={index}
                translateX={translateX}
                translateY={translateY}
                depth={depth}
                direction={direction}
              >
                <img {...image} className={`${css[`address${index + 1}`]}`} />
              </ParallaxWrapper>
            ))}
          </div>
        </Grid>
        <Grid item md={1} display={{ xs: 'none', md: 'block' }} />
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
      </Grid>
    </Container>
  )
}

export default ParallaxText
