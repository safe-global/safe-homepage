import dynamic from 'next/dynamic'
import { useSafeDataRoomStats } from '@/hooks/useSafeDataRoomStats'
import css from './styles.module.css'

const Stack = dynamic(() => import('./Stack'))

export type FeeType = {
  label: 'SWAPS' | 'STAKING' | 'FUTURE FEES'
  isLocked?: boolean
}

const ANNUAL_SWAP_FEES_FALLBACK = 1822878.426773334
const ANNUAL_STAKE_FEES_FALLBACK = 106221.187296
const TOTAL_BARS = 10

const SlidingContent = ({ fees }: { fees: FeeType[] }) => {
  const { annualSwapFees, annualStakeFees } = useSafeDataRoomStats()

  const displaySwapFees = annualSwapFees ? annualSwapFees : ANNUAL_SWAP_FEES_FALLBACK
  const displayStakeFees = annualStakeFees ? annualStakeFees : ANNUAL_STAKE_FEES_FALLBACK
  const feesMap = [displaySwapFees, displayStakeFees]

  return (
    <div className={css.feeContainer}>
      {fees.map((fee, index) => (
        <Stack
          key={fee.label}
          totalBars={TOTAL_BARS}
          value={feesMap[index]}
          isLocked={fee.isLocked}
          label={fee.label}
        />
      ))}
    </div>
  )
}

export default SlidingContent
