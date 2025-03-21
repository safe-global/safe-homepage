import { type BaseBlock } from '@/components/Home/types'
import { Typography } from '@mui/material'
import css from './styles.module.css'

const Card = ({ title, text, image }: Partial<BaseBlock>) => (
  <div className={css.cardWrapper}>
    <div className={css.outline}>
      <div className={css.card}>
        {image ? <img {...image} width={50} className={css.cardIcon} /> : null}
        <div className={css.cardBody}>
          <Typography variant="h4" className={css.title}>
            {title}
          </Typography>
          {text}
        </div>
      </div>
    </div>
  </div>
)

export default Card
