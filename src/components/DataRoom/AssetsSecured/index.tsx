import type { BaseBlock } from '@/components/Home/types'
import { useScroll, useTransform } from 'framer-motion'
import css from './styles.module.css'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Typography } from '@mui/material'
import { Cex, type CEX } from './Cex'
import { useSafeDataRoomStats } from '@/hooks/useSafeDataRoomStats'
import { getNormalizationFactor } from './utils/getNormalizationFactor'
import { formatDate } from '@/lib/formatDate'

const LAST_UPDATED_FALLBACK = 1722946836.34

const Cexes = ({ title, caption, cexes }: BaseBlock & { cexes: CEX[] }) => {
  const { tvlRobinhoodCEX, tvlOKX, tvlBinance, tvlSafe, lastUpdated } = useSafeDataRoomStats()

  // Create a mapping object for TVL values
  const tvlMapping: Record<string, number | null> = {
    tvlRobinhoodCEX,
    tvlOKX,
    tvlBinance,
    tvlSafe,
  }

  // Get the TVL values for each CEX
  const dynamicTvl = cexes.map(({ name, tvl: tvlFallback }) => {
    // get the varibale name of the dynamic TVL
    const dynamicTvlString = `tvl${name.replace(' ', '')}`

    return { name, tvl: tvlMapping[dynamicTvlString] || tvlFallback }
  })

  const timestamp = lastUpdated || LAST_UPDATED_FALLBACK
  const formattedDate = formatDate(timestamp)

  const normalizationFactor = getNormalizationFactor(dynamicTvl.map((cex) => cex.tvl))
  const squareRatio = normalizationFactor / 1000000000

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
          <Typography variant="h5">1 square - ${squareRatio.toFixed(2)}B</Typography>
        </motion.div>
        <motion.div
          style={{
            x: transformRTL,
            opacity: opacityRTL,
          }}
          className={css.cexesContainer}
        >
          {cexes.map((cex, index) => {
            const tvl = dynamicTvl.find((item) => item.name === cex.name)?.tvl || cex.tvl

            return (
              <Cex
                key={index}
                tvl={tvl}
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
          <Typography variant="h2">{title}</Typography>
        </motion.div>
      </div>
    </div>
  )
}

export default Cexes
