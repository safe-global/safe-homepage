import type { BaseBlock } from '@/components/Home/types'
import { useScroll, useTransform } from 'framer-motion'
import css from './styles.module.css'
import type { RefObject } from 'react'
import { motion } from 'framer-motion'
import { Typography } from '@mui/material'
import { Cex, type CEX } from './Cex'
import { useSafeDataRoomStats } from '@/hooks/useSafeDataRoomStats'
import { getNormalizationFactor } from './utils/getNormalizationFactor'
import { formatDate } from '@/lib/formatDate'
import useViewportWidth from '@/hooks/useViewportWidth'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'
import { formatValue } from '@/lib/formatValue'

const LAST_UPDATED_FALLBACK = 1722946836.34
const MOBILE_VIEWPORT_FRACTION = 0.8
const DESKTOP_VIEWPORT_FRACTION = 0.4

export default function SlidingContent({
  title,
  caption,
  cexes,
  containerRef,
}: Omit<BaseBlock, 'text'> & { cexes: CEX[]; containerRef: RefObject<HTMLDivElement> }) {
  const { tvlRobinhoodCEX, tvlOKX, tvlBinance, tvlSafe, lastUpdated } = useSafeDataRoomStats()
  const { viewportWidth } = useViewportWidth()
  const isMobile = useIsMediumScreen()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

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

  const normalizationFactor = getNormalizationFactor(
    viewportWidth * (isMobile ? MOBILE_VIEWPORT_FRACTION : DESKTOP_VIEWPORT_FRACTION),
    dynamicTvl.map((cex) => cex.tvl),
  )

  const squareRatio = formatValue(normalizationFactor)

  const transformLTR = useTransform(scrollYProgress, [0.5, 0.75], ['0%', '100%'])
  const transformRTL = useTransform(scrollYProgress, [0.5, 0.75], ['0', '-100%'])
  const opacityLTR = useTransform(scrollYProgress, [0.25, 0.35, 0.5, 0.75], [0, 1, 1, 0])
  const opacityRTL = useTransform(scrollYProgress, [0.1, 0.35, 0.5, 0.75], [0, 1, 1, 0])

  return (
    <>
      {/* Sliding data */}
      <motion.div
        style={{
          x: transformRTL,
          opacity: opacityRTL,
        }}
        className={css.cexesContainer}
      >
        <div className={css.label}>
          <Typography variant="h5">{caption}</Typography>
          <Typography variant="h5">1 square - ${squareRatio}</Typography>
        </div>

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

      {/* Sliding Text */}
      <motion.div
        style={{
          x: transformLTR,
          opacity: opacityLTR,
        }}
        className={css.title}
      >
        <Typography variant="h2">{title}</Typography>
      </motion.div>
    </>
  )
}
