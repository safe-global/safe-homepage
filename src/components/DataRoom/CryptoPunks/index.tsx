import { useRef } from 'react'
import { Typography } from '@mui/material'
import dynamic from 'next/dynamic'
import type { BaseBlock } from '@/components/Home/types'
import LinksWrapper from '../LinksWrapper'
import { useSafeDataRoomStats } from '@/hooks/useSafeDataRoomStats'
import css from './styles.module.css'

const CRYPTOPUNKS_TOTAL = 10000
const CRYPTOPUNKS_PERCENTAGE_STORED_FALLBACK = 0.092

const LeftPanel = dynamic(() => import('./LeftPanel'))
const RightPanel = dynamic(() => import('./RightPanel'))

const CryptoPunks = ({ title, text, link }: BaseBlock) => {
  const { cryptoPunksStoredPercentage } = useSafeDataRoomStats()

  const backgroundRef = useRef<HTMLDivElement>(null)

  const percentageValue = cryptoPunksStoredPercentage || CRYPTOPUNKS_PERCENTAGE_STORED_FALLBACK
  // Converts to percentage with 1 decimal place
  const percentageToDisplay = (percentageValue * 100).toFixed(1) + '%'

  const cryptoPunksStored = (percentageValue * CRYPTOPUNKS_TOTAL).toFixed(0)
  const fractionToDisplay = `${cryptoPunksStored}/${CRYPTOPUNKS_TOTAL}`

  return (
    <div ref={backgroundRef} className={css.sectionContainer}>
      <div className={css.stickyContainer}>
        <LeftPanel backgroundRef={backgroundRef} />
        <RightPanel backgroundRef={backgroundRef}>
          <Typography variant="h2" className={css.text}>
            {text}
          </Typography>

          <Typography variant="h2">{title}</Typography>

          <div className={css.statsContainer}>
            <Typography variant="h1" className={css.percentage}>
              {percentageToDisplay}
            </Typography>
            <Typography variant="h2" className={css.fraction}>
              {fractionToDisplay}
            </Typography>
          </div>

          {link && <LinksWrapper link={link} variant="dark" />}
        </RightPanel>
      </div>
    </div>
  )
}

export default CryptoPunks
