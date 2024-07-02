import { Typography } from '@mui/material'
import { useScroll, useTransform, motion } from 'framer-motion'
import css from './styles.module.css'
import { useRef } from 'react'
import type { BaseBlock } from '@/components/Home/types'

const VOLUME_AMOUNT = '$611,127,712,666'

const VolumeTransferred = ({ title, text }: BaseBlock) => {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })

  const transformLTR = useTransform(scrollYProgress, [0.25, 0.75], ['-100%', '120%'])
  const transformRTL = useTransform(scrollYProgress, [0.25, 0.75], ['120%', '-140%'])
  const opacityLTR = useTransform(scrollYProgress, [0.25, 0.3, 0.7, 0.75], [0, 1, 1, 0])
  const opacityRTL = useTransform(scrollYProgress, [0.25, 0.3, 0.7, 0.75], [0, 1, 1, 0])

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
            <b>{VOLUME_AMOUNT}</b>
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
              <b>{VOLUME_AMOUNT}</b>
            </Typography>
            <Typography variant="h2">{text}</Typography>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default VolumeTransferred
