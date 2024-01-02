import { Chip, Grid, Typography, useMediaQuery } from '@mui/material'
import { Container } from '@mui/system'
import type { ReactElement } from 'react'

import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import type { BaseBlock } from '@/components/Home/types'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'
import { getImageSource, type ImageObj } from '@/lib/getImageSource'

type FooterProps = {
  text: string
  logos: [
    {
      src: string
      alt: string
    },
  ]
}

const Footer = ({ logos, text }: FooterProps) => {
  if (!logos) return null

  return (
    <div className={css.footer}>
      {text ? (
        <Typography variant="caption" mr="-14px">
          {text}
        </Typography>
      ) : null}
      {logos.map((logo, index) => {
        return <img src={logo.src} alt={logo.alt} key={index} />
      })}
    </div>
  )
}

export const Masthead = ({
  title,
  buttons,
  caption,
  image,
  footer,
  backgroundImage,
}: BaseBlock & {
  image: ImageObj
  backgroundImage: ImageObj
  footer: FooterProps
}): ReactElement => {
  const isSmallScreen = useMediaQuery('(max-width:900px)')

  const bgImage = getImageSource(isSmallScreen, backgroundImage)
  const imageSrc = getImageSource(isSmallScreen, image)

  return (
    <Container className={layoutCss.containerShort} id="masthead">
      <div className={css.container} style={{ backgroundImage: `url(${bgImage})` }}>
        {!backgroundImage ? <div className={css.spot} /> : null}
        <Grid container spacing={{ xs: '90px', sm: '30px' }} justifyContent="space-between" position="relative">
          <Grid item xs={12} md={7}>
            <Chip
              label={
                <Typography variant="caption" color="text.primary">
                  {caption}
                </Typography>
              }
              className={css.chip}
              variant="outlined"
            />
            <Typography variant="h2" mt={3} mb={5}>
              {title}
            </Typography>
            <ButtonsWrapper buttons={buttons} />
          </Grid>
          {imageSrc ? (
            <Grid item xs={12} md={5} xl={4} className={css.image}>
              <img src={imageSrc} alt={image.alt} />
            </Grid>
          ) : null}
        </Grid>
        <Footer {...footer} />
      </div>
    </Container>
  )
}

export default Masthead
