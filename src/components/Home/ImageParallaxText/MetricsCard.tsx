import { Box } from '@mui/material'
import clsx from 'clsx'
import css from './styles.module.css'
import useScrollParallax, { DEPTH_PARAMS, type ParallaxProps } from '@/hooks/useScrollParallax'

export const MetricsCard = ({
  children,
  translateX,
  translateY,
  depth,
  className,
  direction,
}: ParallaxProps & {
  children: JSX.Element
  className: string
}) => {
  const boxRef = useScrollParallax({ translateX, translateY, depth, direction })

  return (
    <Box
      ref={boxRef}
      sx={{ zIndex: DEPTH_PARAMS[depth].zIndex, transform: { translateX, translateY } }}
      className={clsx(css.metricsCard, className)}
    >
      {children}
    </Box>
  )
}
