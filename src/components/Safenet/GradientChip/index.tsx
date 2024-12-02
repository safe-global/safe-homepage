import { Typography } from '@mui/material'
import css from './styles.module.css'

const GradientChip = ({ caption, isUppercase }: { caption: string; isUppercase?: boolean }) => (
  <div className={css.chip}>
    <Typography className={`${css.caption} ${isUppercase && css.uppercase}`}>{caption}</Typography>
  </div>
)

export default GradientChip
