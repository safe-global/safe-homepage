import type { BaseBlock } from '@/components/Home/types'
import dynamic from 'next/dynamic'
import React, { useRef } from 'react'
import css from './styles.module.css'

const Content = dynamic(() => import('./Content'))

const IndustryComparison = ({ title }: BaseBlock) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const gridContainerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className={css.sectionContainer}>
      <div ref={gridContainerRef} className={css.stickyContainer}>
        <Content title={title} containerRef={gridContainerRef} />
      </div>
    </div>
  )
}

export default IndustryComparison
