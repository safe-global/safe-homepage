import { Chip, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'
import type { BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import clsx from 'clsx'

type BannerGradientImageProps = BaseBlock & {
  id?: string
  gradientColour?: string
}

export const BannerGradientImage = ({
  title,
  buttons,
  caption,
  text,
  image,
  id,
  gradientColour,
}: BannerGradientImageProps) => {
  return (
    <Container className={layoutCss.containerMedium} id={id}>
      <div className={clsx(css.container, { [css.darkBackground]: gradientColour === 'dark' })}>
        <Grid container>
          <Grid item xs={12} md={8} className={css.textCont}>
            <Chip
              label={<Typography variant="caption">{caption}</Typography>}
              className={css.chip}
              variant="outlined"
            />
            <Typography variant="h2" mt={2} mb={3}>
              {title}
            </Typography>
            <Typography mb={5}>{text}</Typography>
            <ButtonsWrapper buttons={buttons} />
          </Grid>
          {image ? <img src={image.src} alt={image.alt} className={css.image} /> : null}
        </Grid>
      </div>
    </Container>
  )
}

export default BannerGradientImage
