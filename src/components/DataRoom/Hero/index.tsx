import type { BaseBlock } from '@/components/Home/types'
import { useRef } from 'react'
import dynamic from 'next/dynamic'

import css from './styles.module.css'

const HeroAnimation = dynamic(() => import('./HeroAnimation'), { ssr: false })

const Hero = ({ title, text }: BaseBlock) => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className={css.sectionContainer}>
      <div className={css.stickyContainer}>
        <HeroAnimation containerRef={containerRef} title={title} text={text} />
      </div>
    </div>
  )
}

export default Hero
