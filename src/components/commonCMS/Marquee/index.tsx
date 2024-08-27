import RichText from '@/components/common/RichText'
import IconRow from '@/components/Rewards/IconRow'
import { type BaseBlockEntry } from '@/config/types'
import { isEntryTypeBaseBlock } from '@/lib/typeGuards'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

const Marquee = (props: BaseBlockEntry) => {
  const { title, text, items } = props.fields

  const logos = items?.filter(isEntryTypeBaseBlock) ?? []

  return (
    <div className={`${layoutCss.containerShort} ${css.container}`}>
      <RichText {...title} />

      {text && (
        <div className={css.text}>
          <RichText {...text} />
        </div>
      )}

      <MarqueeElement items={logos} />
    </div>
  )
}

export const MarqueeElement = ({ items }: { items: BaseBlockEntry[] }) => (
  <div className={css.marquee}>
    <div className={css.gradientBase} />

    <div className={css.animation}>
      <div className={css.slider}>
        <IconRow items={items} />
        <IconRow items={items} />
        <IconRow items={items} />
      </div>
    </div>

    <div className={`${css.gradientBase} ${css.gradientFlipped}`} />
  </div>
)

export default Marquee
