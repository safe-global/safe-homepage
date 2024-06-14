import clsx from 'clsx'
import { Container } from '@mui/material'
import { type BaseBlockEntry } from '@/config/types'
import RichText from '@/components/common/RichText'
import { isEntryTypeBaseBlock } from '@/lib/typeGuards'
import IconRow from '@/components/Rewards/IconRow'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

const IconCarousel = (props: BaseBlockEntry) => {
  const { title, items } = props.fields

  const partnersLogos = items?.filter(isEntryTypeBaseBlock) || []

  return (
    <Container className={`${layoutCss.containerShort} ${css.container}`}>
      <RichText {...title} />

      <IconCarouselElement items={partnersLogos} />
    </Container>
  )
}

export const IconCarouselElement = ({ items }: { items: BaseBlockEntry[] }) => (
  <div className={css.carouselWrapper}>
    <div className={css.gradientBase} />
    <div className={css.animation}>
      <div className={css.slider}>
        <IconRow items={items} />
        <IconRow items={items} />
        <IconRow items={items} />
      </div>
    </div>
    <div className={clsx(css.gradientBase, css.gradientFlipped)} />
  </div>
)

export default IconCarousel
