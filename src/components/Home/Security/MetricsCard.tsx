import { Box } from '@mui/material'
import { createRef, useCallback, useEffect } from 'react'
import css from './styles.module.css'

const MAX_DISTANCE = 600

const DAMP_FACTOR = 200

export const MetricsCard = ({
  children,
  translateX,
  translateY,
  className,
}: {
  children: JSX.Element
  translateX: string
  translateY: string
  className: string
}) => {
  const boxRef = createRef<HTMLDivElement>()

  const tiltBox = useCallback(
    (event: MouseEvent) => {
      if (!boxRef.current) {
        return
      }

      const { top, bottom, left, right } = boxRef.current?.getBoundingClientRect()

      const middleX = right - left / 2
      const middleY = bottom - top / 2

      const clientX = event.clientX
      const clientY = event.clientY

      const offsetX = Math.min(MAX_DISTANCE, Math.max(-MAX_DISTANCE, clientX - middleX)) / DAMP_FACTOR
      const offsetY = Math.min(MAX_DISTANCE, Math.max(-MAX_DISTANCE, middleY - clientY)) / DAMP_FACTOR

      boxRef.current.style.transform = `translateX(${translateX}) translateY(${translateY})perspective(1000px) rotateY(${
        offsetX * 5
      }deg) rotateX(${offsetY * 5}deg) scale3d(1, 1, 1)`
    },
    [boxRef, translateX, translateY],
  )

  useEffect(() => {
    window.addEventListener('mousemove', tiltBox)
  }, [tiltBox])

  return (
    <Box ref={boxRef} className={css.metricsCard + ' ' + className}>
      {children}
    </Box>
  )
}
