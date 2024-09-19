import { type RefObject } from 'react'
import { Typography } from '@mui/material'
import { motion, useTransform } from 'framer-motion'
import LinksWrapper from '../LinksWrapper'
import { useSafeDataRoomStats } from '@/hooks/useSafeDataRoomStats'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'
import useScrollProgress from '@/hooks/useScrollProgress'
import type { BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'

const CRYPTOPUNKS_TOTAL = 10000
const CRYPTOPUNKS_PERCENTAGE_STORED_FALLBACK = 0.092

const Content = ({ containerRef, title, text, link }: BaseBlock & { containerRef: RefObject<HTMLDivElement> }) => {
  const { cryptoPunksStoredPercentage } = useSafeDataRoomStats()
  const isMobile = useIsMediumScreen()

  const { scrollYProgress } = useScrollProgress(containerRef)

  const opacityParams = isMobile ? [0.4, 0.45, 0.65, 0.66] : [0.25, 0.35, 0.65, 0.7]
  const opacity = useTransform(scrollYProgress, opacityParams, [0, 1, 1, 0])

  const percentageValue = cryptoPunksStoredPercentage || CRYPTOPUNKS_PERCENTAGE_STORED_FALLBACK
  // Converts to percentage with 1 decimal place
  const percentageToDisplay = (percentageValue * 100).toFixed(1) + '%'

  const cryptoPunksStored = (percentageValue * CRYPTOPUNKS_TOTAL).toFixed(0)
  const fractionToDisplay = `${cryptoPunksStored}/${CRYPTOPUNKS_TOTAL}`

  return (
    <motion.div
      className={css.slidingPanelContent}
      style={{
        opacity,
      }}
    >
      <Typography variant="h2" className={css.text}>
        {text}
      </Typography>

      <Typography variant="h2">{title}</Typography>

      <div className={css.statsContainer}>
        <Typography variant="h1" className={css.percentage}>
          {percentageToDisplay}
        </Typography>
        <Typography variant="h2" className={css.fraction}>
          {fractionToDisplay}
        </Typography>
      </div>

      {link && <LinksWrapper link={link} variant="dark" />}
    </motion.div>
  )
}

export default Content
