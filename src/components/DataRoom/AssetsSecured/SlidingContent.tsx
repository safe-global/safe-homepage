import React, { type RefObject } from 'react'
import type { BaseBlock } from '@/components/Home/types'
import { motion, useTransform } from 'framer-motion'
import { Typography } from '@mui/material'
import { useSafeDataRoomStats } from '@/hooks/useSafeDataRoomStats'
import { getNormalizationFactor } from './utils/getNormalizationFactor'
import { formatDate } from '@/lib/formatDate'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'
import { formatValue } from '@/lib/formatValue'
import useContainerSize from '@/hooks/useContainerSize'
import useScrollProgress from '@/hooks/useScrollProgress'
import { ComparisonType, TvlComparison, type TvlComparisonProps } from '@/components/DataRoom/TvlComparison'
import css from './styles.module.css'

const LAST_UPDATED_FALLBACK = 1722946836.34
const MOBILE_VIEWPORT_FRACTION = 0.8
const DESKTOP_VIEWPORT_FRACTION = 0.4

export default function SlidingContent({
  title,
  caption,
  cexes,
  containerRef,
}: Omit<BaseBlock, 'text'> & { cexes: TvlComparisonProps[]; containerRef: RefObject<HTMLDivElement> }) {
  const { tvlRobinhoodCEX, tvlOKX, tvlBinance, tvlSafe, lastUpdated } = useSafeDataRoomStats()
  const { width: viewportWidth } = useContainerSize(containerRef)

  const isMobile = useIsMediumScreen()
  const { scrollYProgress } = useScrollProgress(containerRef)

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

  const transformLTR = useTransform(scrollYProgress, [0.5, 1.0], ['0%', '100%'])
  const transformRTL = useTransform(scrollYProgress, [0.5, 1.0], ['0', '-100%'])
  const opacityLTR = useTransform(scrollYProgress, [0.25, 0.35, 0.5, 1.0], [0, 1, 1, 0])
  const opacityRTL = useTransform(scrollYProgress, [0.1, 0.35, 0.5, 1.0], [0, 1, 1, 0])

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
          <Typography variant="h5" sx={{ fontSize: '18px' }}>
            1 square - ${squareRatio}
          </Typography>
        </div>

        {cexes.map((cex, index) => {
          const tvl = dynamicTvl.find((item) => item.name === cex.name)?.tvl || cex.tvl

          return (
            <TvlComparison
              type={ComparisonType.CEX}
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
      >
        <Typography className={css.title} variant="h2">
          {title}
        </Typography>
      </motion.div>
    </>
  )
}
