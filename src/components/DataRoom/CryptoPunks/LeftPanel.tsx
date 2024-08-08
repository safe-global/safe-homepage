import { motion, useScroll, useTransform } from 'framer-motion'
import { getRandomColor } from '@/components/DataRoom/CryptoPunks/utils/getRandomColor'
import CryptoPunk from '@/public/images/DataRoom/cryptopunk-silhouette.svg'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'
import { type RefObject } from 'react'
import css from './styles.module.css'

const CRYPTOPUNK_ROWS_NR = 8
const CRYPTOPUNK_COLUMNS_NR = 24

const LeftPanel = ({ backgroundRef: containerRef }: { backgroundRef: RefObject<HTMLDivElement> }) => {
  const isMobile = useIsMediumScreen()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const translateParams = isMobile ? [0, 1] : [0.25, 0.75]
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.7, 0.75], [0, 1, 1, 0])
  const translateLTR = useTransform(scrollYProgress, translateParams, ['-50%', '0%'])
  const translateRTL = useTransform(scrollYProgress, translateParams, ['0%', '-50%'])

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

export default LeftPanel
