import { Typography } from '@mui/material'
import MotionTypography from '@/components/common/MotionTypography'
import { useSafeDataRoomStats } from '@/hooks/useSafeDataRoomStats'
import { formatCurrency } from '@/lib/formatCurrency'
import { type BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'

const ANNUALISED_OUTGOING_TVP_FALLBACK = 214_654_624_913 // 214 billion
const PERCENTAGE_FALLBACK = 0.002127

const SlidingText = ({ title }: { title: BaseBlock['title'] }) => {
  const { tvpToGDPPercentage, annualisedOutgoingTVP } = useSafeDataRoomStats()

  const valueProcessed = annualisedOutgoingTVP || ANNUALISED_OUTGOING_TVP_FALLBACK
  const percentageValue = tvpToGDPPercentage || PERCENTAGE_FALLBACK

  const displayTVPValue = formatCurrency(valueProcessed, 0)
  const percentageToDisplay = '~' + (percentageValue * 100).toFixed(2) + '%'

  return (
    <div className={css.textContainer}>
      <MotionTypography animateYFrom={-30} customDelay={0.5}>
        <Typography variant="h2" align="center">
          {title} {percentageToDisplay} of World GDP at
        </Typography>
      </MotionTypography>

      <MotionTypography animateYFrom={-30} customDelay={0.7}>
        <Typography variant="h2" color="primary.main" align="center">
          {displayTVPValue}
        </Typography>
      </MotionTypography>
    </div>
  )
}

export default SlidingText
