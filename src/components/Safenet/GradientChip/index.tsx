import { Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'

const GradientChip = ({ caption }: { caption: BaseBlock['caption'] }) => (
  <div className={css.chip}>
    <Typography variant="caption" className={css.caption}>
      {caption}
    </Typography>
  </div>
)

export default GradientChip
