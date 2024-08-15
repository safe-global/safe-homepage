import type { BaseBlock } from '@/components/Home/types'
import { useTransform, motion, useScroll } from 'framer-motion'
import dynamic from 'next/dynamic'
import React, { useRef } from 'react'
import css from './styles.module.css'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'
import { Typography } from '@mui/material'
import DotGrid from './DotGrid'

const SlidingPanel = dynamic(() => import('@/components/common/SlidingPanel'))

const IndustryComparison = ({ title }: BaseBlock) => {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const gridContainerRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMediumScreen()

  const { scrollYProgress } = useScroll({
    target: backgroundRef,
    offset: ['start end', 'end start'],
  })

  const opacityParams = [0.25, 0.35, 0.65, 0.75]
  const opacity = useTransform(scrollYProgress, opacityParams, [0, 1, 1, 0])

  return (
    <div ref={backgroundRef} className={css.sectionContainer}>
      <div ref={gridContainerRef} className={css.stickyContainer}>
        <SlidingPanel
          scrollParams={isMobile ? [0, 1] : [0.25, 0.35, 0.65, 0.75]}
          translateParams={isMobile ? ['0%', '0%'] : ['100%', '0%', '0%', '100%']}
          scrollYProgress={scrollYProgress}
        >
          <motion.div
            className={css.slidingPanelContent}
            style={{
              opacity: isMobile ? 1 : opacity,
            }}
          >
            <Typography className={css.title} variant="h1">
              {title}
            </Typography>
            <DotGrid containerRef={gridContainerRef} scrollYProgress={scrollYProgress} />
          </motion.div>
        </SlidingPanel>
      </div>
    </div>
  )
}

export default IndustryComparison
