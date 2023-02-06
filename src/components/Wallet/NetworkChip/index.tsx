import { Box, Typography } from '@mui/material'
import css from './styles.module.css'

export enum TextColor {
  LIGHT = 'white',
  DARK = 'black',
}

export type NetworkChipProps = {
  name: string
  textColor?: TextColor
  icon: JSX.Element
  chainColor: string
}

const NetworkChip = ({ name, icon, textColor = TextColor.LIGHT, chainColor }: NetworkChipProps) => (
  <Box className={css.wrapper} sx={{ backgroundColor: chainColor }}>
    <div className={css.icon}>{icon}</div>
    <Typography variant="body1" color={`${textColor === TextColor.LIGHT ? 'text.primary' : 'text.dark'}`}>
      {name}
    </Typography>
  </Box>
)

export default NetworkChip
