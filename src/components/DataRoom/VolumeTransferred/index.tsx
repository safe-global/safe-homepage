import dynamic from 'next/dynamic'
import { Typography } from '@mui/material'
import { useRef } from 'react'
import type { BaseBlock } from '@/components/Home/types'
import LinksWrapper from '../LinksWrapper'
import css from './styles.module.css'

const SlidingText = dynamic(() => import('./SlidingText'))

const VolumeTransferred = ({ title, link }: BaseBlock) => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className={css.sectionContainer}>
      <div className={css.stickyContainer}>
        <Typography className={css.headerText} variant="h2">
          {title}
        </Typography>

        <SlidingText containerRef={containerRef} />

        <div className={css.linksContainer}>{link && <LinksWrapper link={link} />}</div>
      </div>
    </div>
  )
}

export default VolumeTransferred
