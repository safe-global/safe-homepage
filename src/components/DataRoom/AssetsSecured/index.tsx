import type { BaseBlock } from '@/components/Home/types'
import { useScroll, useTransform } from 'framer-motion'
import css from './styles.module.css'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Typography } from '@mui/material'
import { Cex, type CEX } from './Cex'
import { useSafeDataRoomStats } from '@/hooks/useSafeDataRoomStats'
import { getNormalizationFactor } from './utils/getNormalizationFactor'
import { getTvlValue } from './utils/getTvlValue'

const LAST_UPDATED_FALLBACK = 1722946836.34

const Cexes = ({ title, text, caption, cexes }: BaseBlock & { cexes: CEX[] }) => {
  const { tvlRobinhood, tvlOKX, tvlBinance, tvlSafe, lastUpdated } = useSafeDataRoomStats()

  const timestamp = lastUpdated || LAST_UPDATED_FALLBACK
  const formattedDate = new Date(timestamp * 1000).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
  })

  const normalizationFactor = getNormalizationFactor(cexes, tvlRobinhood, tvlOKX, tvlBinance, tvlSafe)

  const backgroundRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: backgroundRef,
    offset: ['start end', 'end start'],
  })

  const transformLTR = useTransform(scrollYProgress, [0.5, 0.75], ['0%', '100%'])
  const transformRTL = useTransform(scrollYProgress, [0.5, 0.75], ['0', '-100%'])
  const opacityLTR = useTransform(scrollYProgress, [0.25, 0.35, 0.5, 0.75], [0, 1, 1, 0])
  const opacityRTL = useTransform(scrollYProgress, [0.1, 0.35, 0.5, 0.75], [0, 1, 1, 0])

  return (
    <div ref={backgroundRef} className={css.sectionContainer}>
      <div className={css.stickyContainer}>
        <motion.div
          style={{
            x: transformRTL,
            opacity: opacityRTL,
          }}
          className={css.label}
        >
          <Typography variant="h5">{caption}</Typography>
        </motion.div>
        <motion.div
          style={{
            x: transformRTL,
            opacity: opacityRTL,
          }}
          className={css.cexesContainer}
        >
          {cexes.map((cex, index) => {
            const cexTvl = getTvlValue(cexes, tvlRobinhood, tvlOKX, tvlBinance, tvlSafe, cex.id)
            return (
              <Cex
                key={index}
                id={cex.id}
                tvl={cexTvl}
                boxColor={cex.boxColor}
                name={cex.name}
                normalizationFactor={normalizationFactor}
                date={formattedDate}
              />
            )
          })}
        </motion.div>
        <motion.div
          style={{
            x: transformLTR,
            opacity: opacityLTR,
          }}
          className={css.title}
        >
          <Typography variant="h2">
            {title} <br /> {text}
          </Typography>
        </motion.div>
      </div>
    </div>
  )
}

export default Cexes
