import { useMediaQuery } from '@mui/material'
import type { Breakpoint, Theme } from '@mui/material'

export const useMaxWidth = (key: number | Breakpoint) => useMediaQuery((theme: Theme) => theme.breakpoints.down(key))

export const useIsSmallScreen = () => useMaxWidth('sm')
export const useIsMediumScreen = () => useMaxWidth('md')
