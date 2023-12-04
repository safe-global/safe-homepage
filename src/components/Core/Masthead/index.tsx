import { Chip, Grid, Typography, useMediaQuery } from '@mui/material'
import { Container } from '@mui/system'
import type { ReactElement } from 'react'

import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import type { BaseBlock } from '@/components/Home/types'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'

export const Masthead = ({
  title,
  buttons,
  caption,
  image,
  backgroundImage,
}: BaseBlock & {
  image: {
    sm: string
    md: string
    alt: string
  }
  backgroundImage: { sm: string; md: string }
}): ReactElement => {
  const isSmallScreen = useMediaQuery('(max-width:900px)')

  const bgImage = isSmallScreen ? backgroundImage.sm : backgroundImage.md
  const imageSrc = image ? (isSmallScreen ? image.sm : image.md) : undefined

  return (
    <Container className={layoutCss.containerShort} id="masthead">
      <div className={css.container} style={{ backgroundImage: `url(${bgImage})` }}>
        <Grid container spacing={{ xs: '90px', sm: '30px' }} justifyContent="space-between">
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
      </div>
    </Container>
  )
}

export default Masthead
