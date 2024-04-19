import { Box, Typography } from '@mui/material'
import css from './IconChip.module.css'

const IconChip = ({ icon }: { icon: Icon }) => (
  <Box className={css.wrapper}>
    <div className={css.icon}>
      <img src={icon.src} alt={icon.name} width={64} height={64} />
    </div>
    <Typography className={css.secondaryText}>{icon.name}</Typography>
    {icon.new && <div className={css.newBadge}>New</div>}
  </Box>
)

export default IconChip
