import { motion, useScroll, useTransform } from 'framer-motion'
import MatterCanvas from './MatterCanvas'
import { type RefObject } from 'react'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'
import { type BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'

type SlidingMatterCanvasProps = {
  containerRef: RefObject<HTMLDivElement>
  image: BaseBlock['image']
}

const SlidingMatterCanvas = ({ containerRef, image }: SlidingMatterCanvasProps) => {
  const isMobile = useIsMediumScreen()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const mapYProgress = useTransform(scrollYProgress, [0.25, 0.75], [0, 1])
  const transformParams = isMobile ? ['0%', '0%'] : ['0%', '100%']

  const xTransformCanvas = useTransform(mapYProgress, [0.8, 1], transformParams)
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0])

  return (
    <motion.div
      className={css.canvas}
      style={{
        translateX: xTransformCanvas,
        opacity,
      }}
    >
      <MatterCanvas scrollYProgress={scrollYProgress} imgUrl={image?.src || ''} />
    </motion.div>
  )
}

export default SlidingMatterCanvas
