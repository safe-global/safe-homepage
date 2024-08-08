import { motion, useScroll, useTransform } from 'framer-motion'
import type { RefObject, ReactNode } from 'react'
import css from './styles.module.css'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'

const RightPanel = ({ backgroundRef, children }: { backgroundRef: RefObject<HTMLDivElement>; children: ReactNode }) => {
  const isMobile = useIsMediumScreen()

  const { scrollYProgress } = useScroll({
    target: backgroundRef,
    offset: ['start end', 'end start'],
  })

  const opacityParams = isMobile ? [0.4, 0.45, 0.65, 0.66] : [0.25, 0.35, 0.65, 0.7]
  const translateParams = isMobile ? [0.4, 0.45, 0.65, 0.7] : [0.25, 0.35, 0.65, 0.75]
  const opacity = useTransform(scrollYProgress, opacityParams, [0, 1, 1, 0])
  const bgTranslate = useTransform(scrollYProgress, translateParams, ['100%', '0%', '0%', '100%'])

  return (
    <div className={css.rightPanelContainer}>
      <motion.div
        className={css.rightPanelContent}
        style={{
          opacity,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className={css.rightPanelBG}
        style={{
          translateX: bgTranslate,
        }}
      ></motion.div>
    </div>
  )
}

export default RightPanel
