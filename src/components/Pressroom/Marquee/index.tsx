import { Typography } from '@mui/material'
import clsx from 'clsx'
import css from './styles.module.css'
import { type Entry } from 'contentful'
import { type TypeSimpleBaseBlockSkeleton } from '@/contentful/types'

type RowType = { title: string; text: string }

const Row = ({ items }: { items: RowType[] }) => (
  <div className={css.rowWrapper}>
    {items.map(({ title, text }, i) => (
      <div key={`${title}_${i}`}>
        <p className={css.value}>{text}</p>
        <Typography variant="caption">{title}</Typography>
      </div>
    ))}
  </div>
)

type MarqueeProps = { items: Entry<TypeSimpleBaseBlockSkeleton, undefined, string>[] }

const Marquee = ({ items }: MarqueeProps) => {
  const rowItems = items.map(({ fields }) => fields)

  return (
    <div className={css.wrapper}>
      <div className={css.gradientBase} />
      <div className={css.animation}>
        <div className={css.slider}>
          <Row items={rowItems} />
          <Row items={rowItems} />
          <Row items={rowItems} />
        </div>
      </div>
      <div className={clsx(css.gradientBase, css.gradientFlipped)} />
    </div>
  )
}

export default Marquee
