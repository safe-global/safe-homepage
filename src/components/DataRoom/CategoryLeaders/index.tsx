import { useRef } from 'react'
import dynamic from 'next/dynamic'
import type { BaseBlock } from '@/components/Home/types'
import type { TvlComparisonProps } from '@/components/DataRoom/TvlComparison'
import css from './styles.module.css'

const Content = dynamic(() => import('./Content'))

const Leaders = ({ title, leaders }: BaseBlock & { leaders: TvlComparisonProps[] }) => {
  const backgroundRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={backgroundRef} className={css.sectionContainer}>
      <div className={css.stickyContainer}>
        <Content title={title} leaders={leaders} containerRef={backgroundRef} />
      </div>
    </div>
  )
}

export default Leaders
