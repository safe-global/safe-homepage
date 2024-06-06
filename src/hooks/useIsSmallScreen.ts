import { useMediaQuery } from '@mui/material'

export const useIsExtraSmallScreen = () => useMediaQuery('(max-width:600px)')
export const useIsSmallScreen = () => useMediaQuery('(max-width:900px)')
