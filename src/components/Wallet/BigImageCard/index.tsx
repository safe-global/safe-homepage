import { Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'

const BigImageCard = ({ caption, title, text, image }: BaseBlock) => (
  <div className={css.card}>
    <Typography variant="caption">{caption}</Typography>

    <img {...image} className={css.image} />

    <Typography variant="h4" className={css.title}>
      {title}
    </Typography>

    {text ? <Typography color="primary.light">{text}</Typography> : null}
  </div>
)

export default BigImageCard
