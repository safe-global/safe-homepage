import { Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import LinksWrapper from '@/components/DataRoom/LinksWrapper'
import css from './styles.module.css'
import MotionContainer from './MotionContainer'
import { useSafeDataRoomStats } from '@/hooks/useSafeDataRoomStats'
import { formatCurrency } from '@/lib/formatCurrency'

type ExtendedBaseBlock = BaseBlock & {
  subtitle: string
}

const VALUE_LOCKED_FALLBACK = 10000000000
const PERCENTAGE_FALLBACK = 0.001

const WorldGDP = ({ title, subtitle, text, link }: ExtendedBaseBlock) => {
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
          <MotionContainer customDelay={0.2}>
            <div>
              <video className={css.video} src="/videos/DataRoom/SafeGlobe.mp4" autoPlay muted loop />
            </div>
          </MotionContainer>
          <MotionContainer customDelay={0.5}>
            <div className={css.percentContainer}>
              <Typography className={css.title}>{title}</Typography>
              <Typography className={css.title}>{percentageToDisplay}</Typography>
            </div>
            <Typography className={css.title}>{subtitle}</Typography>
          </MotionContainer>
          <MotionContainer customDelay={0.7}>
            <Typography variant="h1">
              <b>{displayTVLValue}</b>
            </Typography>
          </MotionContainer>
        </div>
        <div className={css.linksContainer}>{link && <LinksWrapper {...link} />}</div>
      </div>
    </div>
  )
}

export default WorldGDP
