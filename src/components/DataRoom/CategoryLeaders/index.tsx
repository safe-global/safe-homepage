import type { BaseBlock } from '@/components/Home/types'
import dynamic from 'next/dynamic'
import { useRef } from 'react'
import css from './styles.module.css'
import type { TvlComparisonProps } from '@/components/DataRoom/TvlComparison'

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
