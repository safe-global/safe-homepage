import { Container, Grid, Typography } from '@mui/material'
import clsx from 'clsx'
import type { BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

export type TextBlockImageCampaignProps = BaseBlock & {
  variant: 'image-text' | 'text-image'
  mobileVariant?: 'image-text' | 'text-image'
  children: React.ReactNode
}

const TextBlockImageCampaign = ({
  title,
  text,
  items,
  variant,
  mobileVariant,
  children,
}: TextBlockImageCampaignProps) => (
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
        {children}
      </Grid>
    </Grid>
  </Container>
)

export default TextBlockImageCampaign
