import type { ChainProps } from '@/hooks/useChainsData'
import { Box, Typography } from '@mui/material'
import css from './styles.module.css'

export type NetworkChipProps = {
  name: string
  icon: JSX.Element
}

const NetworkChip = ({ name, icon, textColor, backgroundColor }: NetworkChipProps & Omit<ChainProps, 'chainName'>) => (
  <Box className={css.wrapper} sx={{ backgroundColor }}>
    <div className={css.icon}>{icon}</div>
    <Typography className={css.name} variant="body1" color={textColor}>
      {name}
    </Typography>
  </Box>
)

export default NetworkChip
