import { type RefObject } from 'react'
import { useTransform, motion } from 'framer-motion'
import { Typography } from '@mui/material'
import AsciiScene from './AsciiScene'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'
import useScrollProgress from '@/hooks/useScrollProgress'
import type { BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'

type HeroAnimationProps = {
  containerRef: RefObject<HTMLDivElement>
  title: BaseBlock['title']
  text: BaseBlock['text']
}

const HeroAnimation = ({ containerRef, title, text }: HeroAnimationProps) => {
  const { scrollYProgress } = useScrollProgress(containerRef)

  const isMobile = useIsMediumScreen()
  const mapYProgress = useTransform(scrollYProgress, [0.25, 0.75], [0.5, 1])
  const opacity = useTransform(mapYProgress, [0, 0.5, 0.8, 1], [0, 1, 1, 0])
  const yTransform = useTransform(scrollYProgress, [0, 0.25, 0.6], [0, 0, 400])
  const yPosition = useTransform(scrollYProgress, [0, 0.25, 0.6], isMobile ? [2, 2, 0] : [1.5, 1.5, 0])
  const zoomLevel = useTransform(scrollYProgress, [0, 0.6, 0.75], isMobile ? [70, 70, 400] : [80, 80, 500])

  return (
    <motion.div style={{ opacity }}>
      <motion.div style={{ opacity, y: yTransform }} className={css.content}>
        <Typography variant="h2">{title}</Typography>

        <Typography className={css.text}>{text}</Typography>

        <Typography variant="caption" className={css.scroll}>
          Scroll
        </Typography>
      </motion.div>

      <div className={css.asciiContainer}>
        <AsciiScene yPosition={yPosition} zoomLevel={zoomLevel} />
      </div>
    </motion.div>
  )
}

export default HeroAnimation
