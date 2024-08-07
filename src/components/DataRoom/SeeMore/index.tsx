import type { BaseBlock } from '@/components/Home/types'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'
import { useScroll, useTransform, motion } from 'framer-motion'
import css from './styles.module.css'
import { useRef } from 'react'
import Wave from './Wave'
import { Typography } from '@mui/material'

const SeeMore = ({ text }: BaseBlock) => {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMediumScreen()

  const { scrollYProgress } = useScroll({
    target: backgroundRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 0.75], [0, 1, 1, 0])
  const opacitText = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.75], [0, 1, 1, 0])
  const translate = useTransform(scrollYProgress, [0, 0.2, 0.55, 0.75], ['-250px', '0px', '0px', '250px'])

  return (
    <div ref={backgroundRef} className={css.sectionContainer}>
      <div className={css.stickyContainer}>
        <motion.div style={{ opacity: opacitText, translateY: translate }} className={css.text}>
          <Typography variant="h1">{text}</Typography>
        </motion.div>
        <div className={css.gradientBox}></div>
        <motion.div style={{ opacity }} className={css.wave1}>
          <Wave color="#12FF80" amplitude={isMobile ? 100 : 200} />
        </motion.div>
        <motion.div style={{ opacity }} className={css.wave2}>
          <Wave color="#008A40" amplitude={isMobile ? 90 : 170} />
        </motion.div>
        <motion.div style={{ opacity }} className={css.wave3}>
          <Wave color="#003C1C" amplitude={isMobile ? 80 : 140} />
        </motion.div>
      </div>
    </div>
  )
}

export default SeeMore
