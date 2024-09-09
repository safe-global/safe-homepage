import css from './styles.module.css'
import { useSafeDataRoomStats } from '@/hooks/useSafeDataRoomStats'
import dynamic from 'next/dynamic'
import type { RefObject } from 'react'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'
import { motion, useTransform } from 'framer-motion'
import useScrollProgress from '@/hooks/useScrollProgress'

const Stack = dynamic(() => import('./Stack'))

export type FeeType = {
  label: 'SWAPS' | 'STAKING' | 'FUTURE FEES'
  isLocked: boolean
}

const ANNUAL_SWAP_FEES_FALLBACK = 1822878.426773334
const TOTAL_BARS = 10

const SlidingContent = ({ fees, containerRef }: { fees: FeeType[]; containerRef: RefObject<HTMLDivElement> }) => {
  const { annualSwapFees } = useSafeDataRoomStats()
  const isMobile = useIsMediumScreen()

  const { scrollYProgress } = useScrollProgress(containerRef)

  const transformLTR = useTransform(scrollYProgress, [0.35, 0.65], ['33.33%', '-33.33%'])
  const displaySwapFees = annualSwapFees ? annualSwapFees : ANNUAL_SWAP_FEES_FALLBACK
  const feesMap = [displaySwapFees]

  return (
    <motion.div
      style={{
        x: isMobile ? transformLTR : 0,
      }}
      className={css.feeContainer}
    >
      {fees.map((fee, index) => (
        <Stack
          key={fee.label}
          totalBars={TOTAL_BARS}
          value={feesMap[index]}
          isLocked={fee.isLocked}
          label={fee.label}
        />
      ))}
    </motion.div>
  )
}

export default SlidingContent
