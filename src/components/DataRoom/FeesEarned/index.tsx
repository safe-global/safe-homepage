import { Typography } from '@mui/material'
import { type BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'
import type { FeeType } from './Fee'
import dynamic from 'next/dynamic'
import { useRef } from 'react'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'

const SlidingContent = dynamic(() => import('./SlidingContext'))

const FeesEarned = ({ title, fees }: BaseBlock & { fees: FeeType[] }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMediumScreen()

  return (
    <div ref={containerRef} className={css.sectionContainer}>
      <div className={css.stickyContainer}>
        <Typography variant="h2" align={isMobile ? 'center' : 'right'}>
          {title}
        </Typography>
        <SlidingContent fees={fees} containerRef={containerRef} />
      </div>
    </div>
  )
}

export default FeesEarned