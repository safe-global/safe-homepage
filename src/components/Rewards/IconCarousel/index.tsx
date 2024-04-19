import clsx from 'clsx'
import { Container, Typography } from '@mui/material'
import { type BaseBlockEntry } from '@/config/types'
import RichText from '@/components/common/RichText'
import { isAsset, isEntryTypeBaseBlock } from '@/lib/typeGuards'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

const IconRow = ({ items }: { items: BaseBlockEntry[] }) => (
  <>
    {items.map((item, index) => {
      const { title, image } = item.fields

      return (
        <div className={css.wrapper} key={index}>
          <div className={css.icon}>
            {isAsset(image) && image.fields.file?.url ? (
              <img src={image.fields.file.url} alt={image.fields.title ?? ''} width={64} height={64} />
            ) : null}
          </div>
          <Typography>
            <RichText {...title} />
          </Typography>
        </div>
      )
    })}
  </>
)

const IconCarousel = (props: BaseBlockEntry) => {
  const { title, items } = props.fields

  const partnersLogos = items?.filter(isEntryTypeBaseBlock) || []

  return (
    <Container className={layoutCss.containerShort}>
      <Typography variant="h3" textAlign="center">
        <RichText {...title} />
      </Typography>
      <div className={css.carouselWrapper}>
        <div className={css.gradientBase} />
        <div className={css.animation}>
          <div className={css.slider}>
            <IconRow items={partnersLogos} />
            <IconRow items={partnersLogos} />
            <IconRow items={partnersLogos} />
          </div>
        </div>
        <div className={clsx(css.gradientBase, css.gradientFlipped)} />
      </div>
    </Container>
  )
}

export default IconCarousel
