import { Box } from '@mui/material'
import type { ReactNode } from 'react'
import useScrollParallax, { type ParallaxProps } from '@/hooks/useScrollParallax'

const ParallaxWrapper = ({
  translateX,
  translateY,
  depth,
  children,
  direction,
}: ParallaxProps & { children: ReactNode }) => {
  const boxRef = useScrollParallax({ translateX, translateY, depth, direction })

  return (
    <Box component="div" ref={boxRef}>
      {children}
    </Box>
  )
}

export default ParallaxWrapper
