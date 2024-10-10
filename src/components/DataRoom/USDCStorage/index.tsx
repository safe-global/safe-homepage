import { useRef } from 'react'
import dynamic from 'next/dynamic'
import type { BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'

const SlidingMatterCanvas = dynamic(() => import('./SlidingMatterCanvas'))
const SlidingText = dynamic(() => import('./SlidingText'))

const USDCStorage = ({ title, text, link, image }: BaseBlock) => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className={css.sectionContainer}>
      <div className={css.stickyContainer}>
        <SlidingText containerRef={containerRef} title={title} text={text} link={link} />

        <SlidingMatterCanvas containerRef={containerRef} image={image} />
      </div>
    </div>
  )
}

export default USDCStorage
