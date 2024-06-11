import { useMediaQuery } from '@mui/material'
import type { Theme } from '@mui/material'

export const useIsSmallScreen = () => useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
export const useIsMediumScreen = () => useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
