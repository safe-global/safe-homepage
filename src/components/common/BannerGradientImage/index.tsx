import { Chip, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'
import type { BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import clsx from 'clsx'
import ArrowIcon from '@/public/images/arrow-out-square-corner.svg'

type BannerGradientImageProps = BaseBlock & {
  id?: string
  gradientColor?: string
}

export const BannerGradientImage = ({
  title,
  buttons,
  caption,
  text,
  items,
  image,
  id,
  gradientColor,
}: BannerGradientImageProps) => {
  return (
    <Container className={layoutCss.containerMedium} id={id}>
      <div className={clsx(css.container, { [css.darkBackground]: gradientColor === 'dark' })}>
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

            {items?.map((item) => (
              <Typography key={item.link?.href} mb={2}>
                <a href={item.link?.href} target="_blank" rel="noreferrer">
                  {item.title}
                  <ArrowIcon className={css.icon} />
                </a>
              </Typography>
            ))}

            <ButtonsWrapper buttons={buttons} />
          </Grid>
          {image ? <img src={image.src} alt={image.alt} className={css.image} /> : null}
        </Grid>
      </div>
    </Container>
  )
}

export default BannerGradientImage
