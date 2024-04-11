import { Typography } from '@mui/material'
import clsx from 'clsx'
import { type BaseBlockEntry } from '@/components/Home/types'
import css from './styles.module.css'

const Row = ({ items }: { items: BaseBlockEntry[] }) => (
  <div className={css.rowWrapper}>
    {items.map((item, i) => {
      const { text, caption } = item.fields

      return (
        <div key={`${caption}_${i}`}>
          <p className={css.value}>{text}</p>
          <Typography variant="caption">{caption}</Typography>
        </div>
      )
    })}
  </div>
)

const Marquee = ({ items }: { items: BaseBlockEntry[] }) => (
  <div className={css.wrapper}>
    <div className={css.gradientBase} />
    <div className={css.animation}>
      <div className={css.slider}>
        <Row items={items} />
        <Row items={items} />
        <Row items={items} />
      </div>
    </div>
    <div className={clsx(css.gradientBase, css.gradientFlipped)} />
  </div>
)

export default Marquee
