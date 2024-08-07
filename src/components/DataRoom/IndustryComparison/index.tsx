import type { BaseBlock } from '@/components/Home/types'
import type { MotionValue } from 'framer-motion'
import { useTransform, motion, useScroll } from 'framer-motion'
import type { ReactNode } from 'react'
import React, { useRef } from 'react'
import css from './styles.module.css'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'
import { Typography } from '@mui/material'
import DotGrid from './DotGrid'

const IndustryComparison = ({ title }: BaseBlock) => {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const gridContainerRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMediumScreen()

  const { scrollYProgress } = useScroll({
    target: backgroundRef,
    offset: ['start end', 'end start'],
  })

  return (
    <div ref={backgroundRef} className={css.sectionContainer}>
      <div className={css.stickyContainer}>
        <RightPanel containerRef={gridContainerRef} scrollYProgress={scrollYProgress} isMobile={isMobile}>
          <Typography className={css.title} variant="h1">
            {title}
          </Typography>
          <DotGrid containerRef={gridContainerRef} isMobile={isMobile} scrollYProgress={scrollYProgress} />
        </RightPanel>
      </div>
    </div>
  )
}

const RightPanel = ({
  scrollYProgress,
  children,
  containerRef,
  isMobile,
}: {
  scrollYProgress: MotionValue<number>
  children: ReactNode
  isMobile: boolean
  containerRef: React.RefObject<HTMLDivElement>
}) => {
  const opacityParams = [0.25, 0.35, 0.65, 0.75]
  const translateParams = [0.25, 0.35, 0.65, 0.75]
  const opacity = useTransform(scrollYProgress, opacityParams, [0, 1, 1, 0])
  const bgTranslate = useTransform(scrollYProgress, translateParams, ['100%', '0%', '0%', '100%'])

  return (
    <div ref={containerRef} className={css.rightPanelContainer}>
      <motion.div
        className={css.rightPanelContent}
        style={{
          opacity: isMobile ? 1 : opacity,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className={css.rightPanelBG}
        style={{
          translateX: isMobile ? '0%' : bgTranslate,
        }}
      ></motion.div>
    </div>
  )
}

export default IndustryComparison
