import { Container, Grid, Typography } from '@mui/material'
import clsx from 'clsx'
import type { BaseBlock, BlockWithVariant } from '@/components/Home/types'
import PartnersElement from '@/components/GasStation/TextBlockImagePartners/PartnersElement'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

export type TextBlockImagePartnersProps = BaseBlock & BlockWithVariant

const TextBlockImagePartners = ({ title, text, items, image, variant, mobileVariant }: TextBlockImagePartnersProps) => (
  <Container>
    <Grid
      container
      className={clsx(
        layoutCss.containerTiny,
        variant === 'image-text' ? css.imageFirst : css.textFirst,
        mobileVariant === 'text-image' ? css.textFirstMobile : null,
      )}
      spacing="60px"
      justifyContent="space-between"
    >
      <Grid
        item
        xs={12}
        md={6}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={{ xs: '40px', md: '64px' }}
      >
        <div className={css.textBlock}>
          <Typography variant="h2">{title}</Typography>
          <Typography color="primary.light">{text}</Typography>
        </div>

        <div className={css.partnersBlock}>
          <Typography color="text.primary" variant="caption">
            Our partners
          </Typography>

          {/* Logos */}
          {items ? (
            <div className={css.logos}>
              {items.map(({ image }, index) => (
                <img key={index} src={image?.src || ''} alt={image?.alt || ''} className={css.logo} />
              ))}
            </div>
          ) : undefined}
        </div>
      </Grid>

      <Grid item xs={12} md={6}>
        <PartnersElement image={image} />
      </Grid>
    </Grid>
  </Container>
)

export default TextBlockImagePartners
