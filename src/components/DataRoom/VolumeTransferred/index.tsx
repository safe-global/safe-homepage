import { Box, Container, Typography } from '@mui/material'
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

  const X_LTR = useTransform(scrollYProgress, [0.25, 0.75], ['-100%', '120%'])
  const X_RTL = useTransform(scrollYProgress, [0.25, 0.75], ['120%', '-140%'])
  const OPACITY_LTR = useTransform(scrollYProgress, [0.25, 0.3, 0.7, 0.75], [0, 1, 1, 0])
  const OPACITY_RTL = useTransform(scrollYProgress, [0.25, 0.3, 0.7, 0.75], [0, 1, 1, 0])

  return (
    <Box ref={targetRef} className={css.sectionContainer}>
      <Box className={css.stickyContainer}>
        <Typography className={css.headerText} variant="h2">
          {title}
        </Typography>

        <motion.div
          style={{
            x: X_LTR,
            opacity: OPACITY_LTR,
          }}
          className={css.SlidingModule}
        >
          <Typography className={css.volume}>
            <b>{VOLUME_AMOUNT}</b>
          </Typography>
        </motion.div>

        <motion.div
          style={{
            x: X_RTL,
            opacity: OPACITY_RTL,
          }}
          className={css.SlidingModule}
        >
          <Container className={css.volumeTrailContainer}>
            <Typography className={css.volume}>
              <b>{VOLUME_AMOUNT}</b>
            </Typography>
            <Typography variant="h2">{text}</Typography>
          </Container>
        </motion.div>
      </Box>
    </Box>
  )
}

export default VolumeTransferred
