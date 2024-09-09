import { Typography } from '@mui/material'
import MotionTypography from '@/components/common/MotionTypography'
import { useSafeDataRoomStats } from '@/hooks/useSafeDataRoomStats'
import { formatCurrency } from '@/lib/formatCurrency'
import { type BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'

const VALUE_LOCKED_FALLBACK = 68_583_703_689
const PERCENTAGE_FALLBACK = 0.000679

const SlidingText = ({ title }: { title: BaseBlock['title'] }) => {
  const { tvlToGDPPercentage, totalValueLocked } = useSafeDataRoomStats()

  const valueLocked = totalValueLocked || VALUE_LOCKED_FALLBACK
  const percentageValue = tvlToGDPPercentage || PERCENTAGE_FALLBACK

  const displayTVLValue = formatCurrency(valueLocked, 0)
  const percentageToDisplay = '~' + (percentageValue * 100).toFixed(2) + '%'

  return (
    <div className={css.textContainer}>
      <MotionTypography animateYFrom={-30} customDelay={0.5}>
        <Typography variant="h2" align="center">
          {title} {percentageToDisplay} of World GDP at
        </Typography>
      </MotionTypography>

      <MotionTypography animateYFrom={-30} customDelay={0.7}>
        <Typography variant="h1" color="primary.main" align="center">
          {displayTVLValue}
        </Typography>
      </MotionTypography>
    </div>
  )
}

export default SlidingText
