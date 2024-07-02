import type { BaseBlock } from '@/components/Home/types'
import { Typography } from '@mui/material'
import css from './styles.module.css'

const SLIDER_ITEMS = 7

const Slider = ({ text }: BaseBlock) => (
  <div className={css.wrapper}>
    <div className={css.animationSlider}>
      {Array.from({ length: SLIDER_ITEMS }).map((_, idx) => (
        <Typography variant="caption" className={css.item} key={idx}>
          {text}
        </Typography>
      ))}
    </div>
  </div>
)

export default Slider
