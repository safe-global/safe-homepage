import type { MotionValue } from 'framer-motion'
import { motion, useTransform } from 'framer-motion'
import type { ReactNode } from 'react'
import css from './styles.module.css'

const SlidingPanel = ({
  scrollYProgress,
  children,
  scrollParams,
  translateParams,
  panelWidth = '100%',
}: {
  scrollYProgress: MotionValue<number>
  children: ReactNode
  scrollParams: number[]
  translateParams: string[]
  panelWidth?: string
}) => {
  const bgTranslate = useTransform(scrollYProgress, scrollParams, translateParams)

  return (
    <div
      style={{
        width: panelWidth,
      }}
      className={css.slidingPanelContainer}
    >
      {children}
      <motion.div
        className={css.slidingPanelBG}
        style={{
          translateX: bgTranslate,
        }}
      ></motion.div>
    </div>
  )
}

export default SlidingPanel
