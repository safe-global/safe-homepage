import type { BaseBlock } from '@/components/Home/types'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'
import dynamic from 'next/dynamic'
import { useRef } from 'react'
import css from './styles.module.css'

const PunksGrid = dynamic(() => import('./PunksGrid'))
const Content = dynamic(() => import('./Content'))
const SlidingPanel = dynamic(() => import('@/components/common/SlidingPanel'))

const CryptoPunks = ({ title, text, link }: BaseBlock) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMediumScreen()

  return (
    <div ref={containerRef} className={css.sectionContainer}>
      <div className={css.stickyContainer}>
        <PunksGrid containerRef={containerRef} isMobile={isMobile} />

        <SlidingPanel
          containerRef={containerRef}
          panelWidth={isMobile ? '100%' : '50%'}
          scrollParams={isMobile ? [0.4, 0.45, 0.65, 0.7] : [0.25, 0.35, 0.65, 0.75]}
          translateParams={['100%', '0%', '0%', '100%']}
        >
          <Content containerRef={containerRef} title={title} text={text} link={link} />
        </SlidingPanel>
      </div>
    </div>
  )
}

export default CryptoPunks
