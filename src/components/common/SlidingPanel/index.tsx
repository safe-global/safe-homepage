import type { ReactNode, RefObject } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import css from './styles.module.css'

const SlidingPanel = ({
  containerRef,
  children,
  scrollParams,
  translateParams,
  panelWidth = '100%',
}: {
  containerRef: RefObject<HTMLDivElement>
  children: ReactNode
  scrollParams: number[]
  translateParams: string[]
  panelWidth?: string
}) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

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
      />
    </div>
  )
}

export default SlidingPanel
