import css from './styles.module.css'
import type { FeeType } from './Fee'
import { useSafeDataRoomStats } from '@/hooks/useSafeDataRoomStats'
import dynamic from 'next/dynamic'
import type { RefObject } from 'react'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'
import { useScroll, motion, useTransform } from 'framer-motion'

const Fee = dynamic(() => import('./Fee'))

const SlidingContent = ({ fees, containerRef }: { fees: FeeType[]; containerRef: RefObject<HTMLDivElement> }) => {
  const { annualSwapFees } = useSafeDataRoomStats()
  const displaySwapFees = annualSwapFees ? annualSwapFees : fees.find((fee) => fee.label === 'SWAPS')?.feeAmount || 0

  const isMobile = useIsMediumScreen()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const transformLTR = useTransform(scrollYProgress, [0.35, 0.65], ['66.66%', '0%'])

  return (
    <motion.div
      style={{
        x: isMobile ? transformLTR : 0,
      }}
      className={css.feeContainer}
    >
      {fees.map((fee, index) => (
        <Fee
          key={index}
          totalBars={10}
          feeAmount={fee.label === 'SWAPS' ? displaySwapFees : fee.feeAmount || 0}
          isLocked={fee.isLocked}
          label={fee.label}
        />
      ))}
    </motion.div>
  )
}

export default SlidingContent
