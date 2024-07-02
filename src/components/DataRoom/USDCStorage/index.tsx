import { Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import { motion, useScroll, useTransform } from 'framer-motion'
import MatterCanvas from './MatterCanvas'
import { useRef } from 'react'
import LinksWrapper from '../LinksWrapper'
import css from './styles.module.css'
import MotionTypography from './MotionTypography'

const USDC_PERCENTAGE = '10%'

const USDCStorage = ({ title, text, link, image }: BaseBlock) => {
  const containerRef = useRef<HTMLDivElement>(null)

  // Initialize Tracking scrollYProgress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Map Container Scroll To Sticky Section Scroll
  const mapYProgress = useTransform(scrollYProgress, [0.25, 0.75], [0, 1])

  // Transform Properties
  const xTransformContent = useTransform(mapYProgress, [0.8, 1], ['0%', '-100%'])
  const xTransformCanvas = useTransform(mapYProgress, [0.8, 1], ['0%', '100%'])

  return (
    <div ref={containerRef} className={css.sectionContainer}>
      <div className={css.stickyContainer}>
        <motion.div
          style={{
            translateX: xTransformContent,
          }}
          className={css.content}
        >
          <MotionTypography customDelay={0.5}>
            <Typography variant="h2">{title}</Typography>
          </MotionTypography>
          <MotionTypography customDelay={1.5}>
            <Typography className={css.usdcPercentage}>
              <b>{USDC_PERCENTAGE}</b>
            </Typography>
            <Typography variant="h2" className={css.text}>
              {text}
            </Typography>
            {link && <LinksWrapper {...link} />}
          </MotionTypography>
        </motion.div>
        <motion.div
          className={css.canvas}
          style={{
            translateX: xTransformCanvas,
          }}
        >
          <MatterCanvas scrollYProgress={scrollYProgress} imgUrl={image?.src} />
        </motion.div>
      </div>
    </div>
  )
}

export default USDCStorage
