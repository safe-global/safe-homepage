import { Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import { motion, useScroll, useTransform } from 'framer-motion'
import MatterCanvas from './MatterCanvas'
import { useRef } from 'react'
import LinksWrapper from '../LinksWrapper'
import css from './styles.module.css'
import MotionTypography from './MotionTypography'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'
import { useSafeDataRoomStats } from '@/hooks/useSafeDataRoomStats'
import { decimalToPercentage } from '@/lib/decimalToPercentage'

const USDC_PERCENTAGE_STORED_FALLBACK = 0.0867

const USDCStorage = ({ title, text, link, image }: BaseBlock) => {
  const { usdcPercentageStored } = useSafeDataRoomStats()

  const isMobile = useIsMediumScreen()
  const containerRef = useRef<HTMLDivElement>(null)

  // Initialize Tracking scrollYProgress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Map Container Scroll To Sticky Section Scroll
  const mapYProgress = useTransform(scrollYProgress, [0.25, 0.75], [0, 1])

  // Transform Properties
  const getTransformParams = (customTransform: string[]): string[] => {
    return isMobile ? ['0%', '0%'] : customTransform
  }

  const xTransformContent = useTransform(mapYProgress, [0.8, 1], getTransformParams(['0%', '-100%']))
  const xTransformCanvas = useTransform(mapYProgress, [0.8, 1], getTransformParams(['0%', '100%']))
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0])

  const value = usdcPercentageStored || USDC_PERCENTAGE_STORED_FALLBACK
  const displayValue = decimalToPercentage(value, 1)

  return (
    <div ref={containerRef} className={css.sectionContainer}>
      <motion.div style={{ opacity }} className={css.stickyContainer}>
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
              <b>{displayValue}</b>
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
          <MatterCanvas scrollYProgress={scrollYProgress} imgUrl={image?.src || ''} />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default USDCStorage
