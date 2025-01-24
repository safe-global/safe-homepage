import { Typography } from '@mui/material'
import css from './style.module.css'
import type { BaseBlock } from '@/components/Home/types'
import ArrowIcon from '@/public/images/arrow-out-square-corner.svg'

export default function Card({ item }: { item: Partial<BaseBlock> }) {
  return (
    <div className={css.cardContainer}>
      <ArrowIcon className={css.icon} />
      {item.image?.src && <img src={item.image.src} alt={item.image.alt} className={css.image} />}
      <Typography variant="h5" className={css.title}>
        {item.title}
      </Typography>
    </div>
  )
}
