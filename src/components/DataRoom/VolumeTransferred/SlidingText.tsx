import { type RefObject } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useSafeDataRoomStats } from '@/hooks/useSafeDataRoomStats'
import { formatCurrency } from '@/lib/formatCurrency'
import css from './styles.module.css'
import { Typography } from '@mui/material'

const VOLUME_TRANSFERRED_FALLBACK = 611_127_712_666

const SlidingText = ({ containerRef }: { containerRef: RefObject<HTMLDivElement> }) => {
  const { totalVolumeTransfered } = useSafeDataRoomStats()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const transformLTR = useTransform(scrollYProgress, [0.25, 0.75], ['-100%', '120%'])
  const transformRTL = useTransform(scrollYProgress, [0.25, 0.75], ['120%', '-140%'])
  const opacityLTR = useTransform(scrollYProgress, [0.25, 0.3, 0.7, 0.75], [0, 1, 1, 0])
  const opacityRTL = useTransform(scrollYProgress, [0.25, 0.3, 0.7, 0.75], [0, 1, 1, 0])

  const volumeTransferred = totalVolumeTransfered || VOLUME_TRANSFERRED_FALLBACK
  const displayValue = formatCurrency(volumeTransferred, 0)

  return (
    <>
      <motion.div
        style={{
          x: transformLTR,
          opacity: opacityLTR,
        }}
        className={css.slidingModule}
      >
        <Typography className={css.volume}>
          <b>{displayValue}</b>
        </Typography>
      </motion.div>

      <motion.div
        style={{
          x: transformRTL,
          opacity: opacityRTL,
        }}
        className={css.slidingModule}
      >
        <div className={css.volumeTrailContainer}>
          <Typography className={css.volume}>
            <b>{displayValue}</b>
          </Typography>

          <Typography variant="h2">and counting...</Typography>
        </div>
      </motion.div>
    </>
  )
}

export default SlidingText
