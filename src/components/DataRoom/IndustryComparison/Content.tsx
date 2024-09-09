import type { BaseBlock } from '@/components/Home/types'
import { Typography } from '@mui/material'
import { motion, useScroll, useTransform } from 'framer-motion'
import DotGrid from './DotGrid'
import css from './styles.module.css'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'
import type { RefObject } from 'react'

const Content = ({ containerRef, title }: { containerRef: RefObject<HTMLDivElement>; title: BaseBlock['title'] }) => {
  const isMobile = useIsMediumScreen()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const scrollParams = [0.25, 0.35, 0.65, 0.75]
  const opacityParams = [0, 1, 1, 0]
  const opacity = useTransform(scrollYProgress, scrollParams, opacityParams)

  return (
    <motion.div
      className={css.slidingPanelContent}
      style={{
        opacity: isMobile ? 1 : opacity,
      }}
    >
      <Typography variant="h1">{title}</Typography>
      <DotGrid containerRef={containerRef} />
    </motion.div>
  )
}

export default Content
