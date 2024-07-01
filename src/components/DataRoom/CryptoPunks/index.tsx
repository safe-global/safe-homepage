import { Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import { useRef } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'
import type { ReactNode } from 'react'
import type { MotionValue } from 'framer-motion'
import css from './styles.module.css'
import LinksWrapper from '../LinksWrapper'
import { getColor } from './utils'
import CryptoPunk from '@/public/images/DataRoom/cryptopunk-silhouette.svg'

const CRYPTOPUNK_ROWS_NR = 8
const CRYPTOPUNK_COLUMNS_NR = 15

const CryptoPunks = ({ title, text, link }: BaseBlock) => {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: backgroundRef,
    offset: ['start end', 'end start'],
  })

  return (
    <div ref={backgroundRef} className={css.sectionContainer}>
      <div className={css.stickyContainer}>
        <LeftPanel scrollYProgress={scrollYProgress} />

        <RightPanel scrollYProgress={scrollYProgress}>
          <Typography variant="h2">{title}</Typography>
          <Typography variant="h2">{text}</Typography>
          {link && <LinksWrapper {...link} />}
        </RightPanel>
      </div>
    </div>
  )
}

const LeftPanel = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75], [0, 1, 1, 0])
  const translateLTR = useTransform(scrollYProgress, [0.25, 0.75], ['-50%', '0%'])
  const translateRTL = useTransform(scrollYProgress, [0.25, 0.75], ['0%', '-50%'])
  const bgTranslate = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75], ['-100%', '0%', '0%', '-100%'])

  const translateDirection = (index: number) => (index % 2 === 1 ? translateLTR : translateRTL)

  return (
    <motion.div
      style={{
        x: bgTranslate,
        opacity,
      }}
      className={css.leftPanelContainer}
    >
      {Array.from({ length: CRYPTOPUNK_ROWS_NR }).map((_, outerIndex) => (
        <motion.div
          style={{ translateX: translateDirection(outerIndex) }}
          className={css.cryptoPunkColumns}
          key={outerIndex}
        >
          {Array.from({ length: CRYPTOPUNK_COLUMNS_NR }).map((_, innerIndex) => (
            <motion.div
              key={innerIndex}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
              }}
              style={{
                transformOrigin: 'center',
                color: getColor(),
              }}
            >
              <CryptoPunk />
            </motion.div>
          ))}
        </motion.div>
      ))}
    </motion.div>
  )
}

const RightPanel = ({ scrollYProgress, children }: { scrollYProgress: MotionValue<number>; children: ReactNode }) => {
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75], [0, 1, 1, 0])
  const bgTranslate = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75], ['100%', '0%', '0%', '100%'])

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

export default CryptoPunks
