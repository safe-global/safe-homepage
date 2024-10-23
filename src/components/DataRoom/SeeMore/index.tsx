import type { BaseBlock } from '@/components/Home/types'
import { useRef } from 'react'
import dynamic from 'next/dynamic'
import css from './styles.module.css'

const SlidingWave = dynamic(() => import('./SlidingWave'))

const SeeMore = ({ text }: BaseBlock) => {
  const backgroundRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={backgroundRef} className={css.sectionContainer}>
      <div className={css.stickyContainer}>
        <SlidingWave text={text} containerRef={backgroundRef} />
      </div>
    </div>
  )
}

export default SeeMore
