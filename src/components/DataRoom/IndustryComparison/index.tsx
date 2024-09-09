import type { BaseBlock } from '@/components/Home/types'
import dynamic from 'next/dynamic'
import React, { useRef } from 'react'
import css from './styles.module.css'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'

const Content = dynamic(() => import('./Content'))
const SlidingPanel = dynamic(() => import('@/components/common/SlidingPanel'))

const IndustryComparison = ({ title }: BaseBlock) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const gridContainerRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMediumScreen()

  return (
    <div ref={containerRef} className={css.sectionContainer}>
      <div ref={gridContainerRef} className={css.stickyContainer}>
        <SlidingPanel
          containerRef={containerRef}
          scrollParams={isMobile ? [0, 1] : [0.25, 0.35, 0.65, 0.75]}
          translateParams={isMobile ? ['0%', '0%'] : ['100%', '0%', '0%', '100%']}
        >
          <Content title={title} containerRef={gridContainerRef} />
        </SlidingPanel>
      </div>
    </div>
  )
}

export default IndustryComparison
