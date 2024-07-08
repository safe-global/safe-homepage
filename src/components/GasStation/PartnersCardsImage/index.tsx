import { Container, Grid, Typography } from '@mui/material'
import clsx from 'clsx'
import type { BaseBlock, BlockWithVariant } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import LinkCard from '@/components/GasStation/LinkCard'

export type PartnersCardsImageProps = BaseBlock &
  BlockWithVariant & {
    partnersImage: BaseBlock['image']
  }

const PartnersCardsImage = ({
  caption,
  partnersImage,
  items,
  variant,
  mobileVariant,
  image,
}: PartnersCardsImageProps) => {
  return (
    <Container className={css.container}>
      <div className={css.spot1} />
      <Grid
        container
        className={clsx(
          layoutCss.containerMedium,
          variant === 'image-text' ? css.imageFirst : css.textFirst,
          mobileVariant === 'text-image' ? css.textFirstMobile : null,
        )}
        spacing="60px"
        justifyContent="space-between"
      >
        <Grid item xs={12} md={6} display="flex" flexDirection="column" justifyContent="center" gap={{ xs: 3, md: 4 }}>
          {caption && (
            <Typography variant="caption" className={css.gradientCaption}>
              {caption}
            </Typography>
          )}

          {partnersImage ? <img src={partnersImage.src} alt={partnersImage.alt} className={css.partnersImage} /> : null}

          {items?.map((item, index) => (
            <LinkCard key={index} title={item.title || ''} link={item.link} />
          ))}
        </Grid>

        {image ? (
          <Grid item xs={12} md={6}>
            <img src={image.src} alt={image.alt} className={css.image} />
          </Grid>
        ) : null}
      </Grid>
    </Container>
  )
}

export default PartnersCardsImage
