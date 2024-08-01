import { Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import LinksWrapper from '@/components/DataRoom/LinksWrapper'
import css from './styles.module.css'
import { useSafeDataRoomStats } from '@/hooks/useSafeDataRoomStats'
import { formatCurrency } from '@/lib/formatCurrency'
import MotionTypography from '../USDCStorage/MotionTypography'

const VALUE_LOCKED_FALLBACK = 68_583_703_689
const PERCENTAGE_FALLBACK = 0.000679

const WorldGDP = ({ title, subtitle, text, link }: BaseBlock & { subtitle: string }) => {
  const { tvlToGDPPercentage, totalValueLocked } = useSafeDataRoomStats()
  const valueLocked = totalValueLocked || VALUE_LOCKED_FALLBACK
  const percentageValue = tvlToGDPPercentage || PERCENTAGE_FALLBACK

  const displayTVLValue = formatCurrency(valueLocked, 0)
  const percentageToDisplay = '~' + (percentageValue * 100).toFixed(2) + '%'

  return (
    <div className={css.sectionContainer}>
      <div className={css.stickyContainer}>
        <Typography className={css.text}>{text}</Typography>

        <div className={css.contentContainer}>
          <MotionTypography animateYFrom={-30} customDelay={0.2}>
            <div>
              <video className={css.video} src="/videos/DataRoom/SafeGlobe.mp4" autoPlay muted loop />
            </div>
          </MotionTypography>

          <MotionTypography animateYFrom={-30} customDelay={0.5}>
            <div className={css.percentContainer}>
              <Typography variant="h2" align="center">
                {title}
              </Typography>
              <Typography variant="h2" align="center">
                {percentageToDisplay}
              </Typography>
            </div>
            <Typography variant="h2" align="center">
              {subtitle}
            </Typography>
          </MotionTypography>

          <MotionTypography animateYFrom={-30} customDelay={0.7}>
            <Typography variant="h1" color="primary.main">
              {displayTVLValue}
            </Typography>
          </MotionTypography>
        </div>

        <div className={css.linksContainer}>{link && <LinksWrapper link={link} />}</div>
      </div>
    </div>
  )
}

export default WorldGDP
