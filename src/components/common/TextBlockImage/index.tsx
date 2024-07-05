import { Container, Grid, Typography } from '@mui/material'
import clsx from 'clsx'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'
import type { BaseBlock, BlockWithVariant } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

export type TextBlockImageProps = BaseBlock &
  BlockWithVariant & {
    children: React.ReactNode
  }

const TextBlockImage = ({
  caption,
  title,
  text,
  buttons,
  items,
  variant,
  mobileVariant,
  children,
}: TextBlockImageProps) => {
  return (
    <Container>
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
            <Typography variant="caption" component="div">
              {caption}
            </Typography>
          )}
          <Typography variant="h2">{title}</Typography>
          {text && (
            <Typography variant="h5" className={css.textBlock}>
              {text}
            </Typography>
          )}

          {/* Logos */}
          {items ? (
            <div className={css.logos}>
              {items.map(({ image }, index) => (
                <img key={index} src={image?.src || ''} alt={image?.alt || ''} className={css.logo} />
              ))}
            </div>
          ) : undefined}
          <ButtonsWrapper buttons={buttons} />
        </Grid>

        <Grid item xs={12} md={6}>
          {children}
        </Grid>
      </Grid>
    </Container>
  )
}

export default TextBlockImage
