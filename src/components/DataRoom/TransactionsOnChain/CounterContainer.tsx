import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'
import { useCounterScroll } from './useCounterScroll'
import Counter from './Counter'
import css from './styles.module.css'

const CounterContainer = ({ percentage }: { percentage: number }) => {
  const targetScrollRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetScrollRef,
    offset: ['start end', 'end start'],
  })

  const isMobile = useIsMediumScreen()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.1, 1])
  const yTransform = useTransform(scrollYProgress, [0, 0.5], isMobile ? [200, 0] : [600, 0])
  const value = useCounterScroll(scrollYProgress, percentage)

  return (
    <motion.div
      style={{
        opacity,
        y: yTransform,
      }}
      className={css.counterContainer}
      ref={targetScrollRef}
    >
      <div className={css.box1}>
        <Counter value={value} />
      </div>

      <div className={css.box2}>
        <Counter value={value} />
      </div>

      <Counter value={value} />
    </motion.div>
  )
}

export default CounterContainer
