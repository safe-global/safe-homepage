import { Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import AsciiScene from './AsciiScene'
import { useMaxWidth } from '@/hooks/useMaxWidth'
import css from './styles.module.css'

const Hero = ({ title, text }: BaseBlock) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const isMobile = useMaxWidth(900)
  const mapYProgress = useTransform(scrollYProgress, [0.25, 0.75], [0.5, 1])
  const opacity = useTransform(mapYProgress, [0, 0.5, 0.8, 1], [0, 1, 1, 0])
  const yTransform = useTransform(scrollYProgress, [0, 0.25, 0.6], [0, 0, 400])
  const yPosition = useTransform(scrollYProgress, [0, 0.25, 0.6], isMobile ? [2, 2, 0] : [1.5, 1.5, 0])
  const zoomLevel = useTransform(scrollYProgress, [0, 0.6, 0.75], isMobile ? [70, 70, 400] : [80, 80, 500])

  return (
    <div ref={containerRef} className={css.sectionContainer}>
      <motion.div style={{ opacity }} className={css.stickyContainer}>
        <motion.div style={{ opacity, y: yTransform }} className={css.content}>
          <Typography variant="h2">{title}</Typography>
          <Typography className={css.text} variant="h5">
            {text}
          </Typography>
          <Typography variant="caption" className={css.scroll}>
            Scroll
          </Typography>
        </motion.div>
        <div className={css.asciiContainer}>
          <AsciiScene isMobile={isMobile} yPosition={yPosition} zoomLevel={zoomLevel} />
        </div>
      </motion.div>
    </div>
  )
}

export default Hero
