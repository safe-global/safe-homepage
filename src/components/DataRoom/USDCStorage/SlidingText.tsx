import { type RefObject } from 'react'
import { Typography } from '@mui/material'
import { motion, useTransform } from 'framer-motion'
import MotionTypography from '@/components/common/MotionTypography'
import LinksWrapper from '../LinksWrapper'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'
import { useSafeDataRoomStats } from '@/hooks/useSafeDataRoomStats'
import useScrollProgress from '@/hooks/useScrollProgress'
import { type BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'

const USDC_PERCENTAGE_STORED_FALLBACK = 0.0448

type SlidingTextProps = {
  containerRef: RefObject<HTMLDivElement>
  title: BaseBlock['title']
  text: BaseBlock['text']
  link: BaseBlock['link']
}

const SlidingText = ({ containerRef, title, text, link }: SlidingTextProps) => {
  const { usdcPercentageStored } = useSafeDataRoomStats()

  const isMobile = useIsMediumScreen()
  const { scrollYProgress } = useScrollProgress(containerRef)
  const mapYProgress = useTransform(scrollYProgress, [0.25, 0.75], [0, 1])
  const transformParams = isMobile ? ['0%', '0%'] : ['0%', '-100%']

  const xTransformContent = useTransform(mapYProgress, [0.8, 1], transformParams)
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0])

  const value = usdcPercentageStored || USDC_PERCENTAGE_STORED_FALLBACK
  // Converts to percentage with 1 decimal place
  const displayValue = (value * 100).toFixed(1) + '%'

  return (
    <motion.div
      style={{
        translateX: xTransformContent,
        opacity,
      }}
      className={css.content}
    >
      <MotionTypography animateYFrom={50} customDelay={0.5}>
        <Typography variant="h2">{title}</Typography>
      </MotionTypography>
      <MotionTypography animateYFrom={50} customDelay={0.5}>
        <Typography className={css.usdcPercentage}>
          <b>{displayValue}</b>
        </Typography>

        <Typography variant="h2" className={css.text}>
          {text}
        </Typography>

        {link && (
          <div className={css.overlay}>
            <LinksWrapper link={link} />
          </div>
        )}
      </MotionTypography>
    </motion.div>
  )
}

export default SlidingText
