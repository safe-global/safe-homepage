import { Typography } from '@mui/material'
import { useScroll, useTransform, motion } from 'framer-motion'
import css from './styles.module.css'
import { useRef } from 'react'
import type { BaseBlock } from '@/components/Home/types'
import LinksWrapper from '../LinksWrapper'
import { useSafeDataRoomStats } from '@/hooks/useSafeDataRoomStats'
import { formatCurrency } from '@/lib/formatCurrency'

const VOLUME_TRANSFERRED_FALLBACK = 611_127_712_666

const VolumeTransferred = ({ title, text, link }: BaseBlock) => {
  const { totalVolumeTransfered } = useSafeDataRoomStats()

  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })

  const transformLTR = useTransform(scrollYProgress, [0.25, 0.75], ['-100%', '120%'])
  const transformRTL = useTransform(scrollYProgress, [0.25, 0.75], ['120%', '-140%'])
  const opacityLTR = useTransform(scrollYProgress, [0.25, 0.3, 0.7, 0.75], [0, 1, 1, 0])
  const opacityRTL = useTransform(scrollYProgress, [0.25, 0.3, 0.7, 0.75], [0, 1, 1, 0])

  const volumeTransferred = totalVolumeTransfered || VOLUME_TRANSFERRED_FALLBACK
  const displayValue = formatCurrency(volumeTransferred, 0)

  return (
    <div ref={targetRef} className={css.sectionContainer}>
      <div className={css.stickyContainer}>
        <Typography className={css.headerText} variant="h2">
          {title}
        </Typography>

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

            <Typography variant="h2">{text}</Typography>
          </div>
        </motion.div>
        <div className={css.linksContainer}>{link && <LinksWrapper link={link} />}</div>
      </div>
    </div>
  )
}

export default VolumeTransferred
