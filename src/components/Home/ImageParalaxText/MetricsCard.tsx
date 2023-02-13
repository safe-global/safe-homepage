import { Box } from '@mui/material'
import clsx from 'clsx'
import css from './styles.module.css'
import useScrollParallax, { DEPTH_PARAMS } from '@/hooks/useScrollParallax'

export const MetricsCard = ({
  children,
  translateX,
  translateY,
  depth,
  className,
}: {
  children: JSX.Element
  translateX: number
  translateY: number
  className: string
  depth: 0 | 1 | 2 | 3 | 4
}) => {
  const boxRef = useScrollParallax(translateX, translateY, depth)

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
