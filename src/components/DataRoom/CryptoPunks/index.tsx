import { Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import { useRef } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'
import type { ReactNode } from 'react'
import type { MotionValue } from 'framer-motion'
import css from './styles.module.css'
import LinksWrapper from '../LinksWrapper'
import { getRandomColor } from '@/components/DataRoom/CryptoPunks/utils/getRandomColor'
import CryptoPunk from '@/public/images/DataRoom/cryptopunk-silhouette.svg'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'

const CRYPTOPUNKS_PERCENTAGE = '14%'
const CRYPTOPUNKS_FRACTION = '1369/10,000'

const CRYPTOPUNK_ROWS_NR = 8
const CRYPTOPUNK_COLUMNS_NR = 24

const CryptoPunks = ({ title, text, link }: BaseBlock) => {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMediumScreen()
  const { scrollYProgress } = useScroll({
    target: backgroundRef,
    offset: ['start end', 'end start'],
  })

  return (
    <div ref={backgroundRef} className={css.sectionContainer}>
      <div className={css.stickyContainer}>
        <LeftPanel scrollYProgress={scrollYProgress} isMobile={isMobile} />
        <RightPanel scrollYProgress={scrollYProgress} isMobile={isMobile}>
          <Typography variant="h2" className={css.text}>
            {text}
          </Typography>

          <Typography variant="h2">{title}</Typography>

          <div className={css.statsContainer}>
            <Typography variant="h1" className={css.percentage}>
              {CRYPTOPUNKS_PERCENTAGE}
            </Typography>
            <Typography variant="h2" className={css.fraction}>
              {CRYPTOPUNKS_FRACTION}
            </Typography>
          </div>
          {link && <LinksWrapper {...link} />}
        </RightPanel>
      </div>
    </div>
  )
}

const LeftPanel = ({ scrollYProgress, isMobile }: { scrollYProgress: MotionValue<number>; isMobile: boolean }) => {
  const translateParams = isMobile ? [0, 1] : [0.25, 0.75]
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.7, 0.75], [0, 1, 1, 0])
  const translateLTR = useTransform(scrollYProgress, translateParams, ['-50%', '0%'])
  const translateRTL = useTransform(scrollYProgress, translateParams, ['0%', '-50%'])

  const translateDirection = (index: number) => (index % 2 === 1 ? translateLTR : translateRTL)

  const translateDirection = (index: number) => (index % 2 === 1 ? translateLTR : translateRTL)

  return (
    <motion.div
      style={{
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
                color: getRandomColor(),
              }}
            >
              <CryptoPunk className={css.cryptopunk} />
            </motion.div>
          ))}
        </motion.div>
      ))}
    </motion.div>
  )
}

const RightPanel = ({
  scrollYProgress,
  children,
  isMobile,
}: {
  scrollYProgress: MotionValue<number>
  children: ReactNode
  isMobile: boolean
}) => {
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

export default CryptoPunks
