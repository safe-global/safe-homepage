import type { BaseBlock } from '@/components/Home/types'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'
import { useScroll } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useRef } from 'react'
import css from './styles.module.css'

const PunksGrid = dynamic(() => import('./PunksGrid'))
const Content = dynamic(() => import('./Content'))
const SlidingPanel = dynamic(() => import('@/components/common/SlidingPanel'))

const CryptoPunks = ({ title, text, link }: BaseBlock) => {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMediumScreen()

  const { scrollYProgress } = useScroll({
    target: backgroundRef,
    offset: ['start end', 'end start'],
  })

  return (
    <div ref={backgroundRef} className={css.sectionContainer}>
      <div className={css.stickyContainer}>
        <PunksGrid scrollYProgress={scrollYProgress} isMobile={isMobile} />
        <SlidingPanel
          panelWidth={isMobile ? '100%' : '50%'}
          scrollParams={isMobile ? [0.4, 0.45, 0.65, 0.7] : [0.25, 0.35, 0.65, 0.75]}
          translateParams={['100%', '0%', '0%', '100%']}
          scrollYProgress={scrollYProgress}
        >
          <Content title={title} text={text} link={link} scrollYProgress={scrollYProgress} />
        </SlidingPanel>
      </div>
    </div>
  )
}

export default CryptoPunks
