import type { ChainProps } from '@/components/common/Networks'
import { Box, Typography } from '@mui/material'
import css from './styles.module.css'

export type NetworkChipProps = {
  name: string
  icon: {
    src: string
    alt: string
  }
} & Pick<ChainProps, 'textColor' | 'backgroundColor'>

const NetworkChip = ({ name, icon, textColor, backgroundColor }: NetworkChipProps) => (
  <Box className={css.wrapper} sx={{ backgroundColor }}>
    <div className={css.icon}>
      <img {...icon} />
    </div>
    <Typography className={css.name} variant="body1" color={textColor}>
      {name}
    </Typography>
  </Box>
)

export default NetworkChip
