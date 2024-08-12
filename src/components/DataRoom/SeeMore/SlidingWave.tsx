import type { BaseBlock } from '@/components/Home/types'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'
import { Typography } from '@mui/material'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { RefObject } from 'react'
import css from './styles.module.css'
import Wave from './Wave'

export default function SlidingWave({
  text,
  containerRef,
}: {
  text: BaseBlock['text']
  containerRef: RefObject<HTMLDivElement>
}) {
  const isMobile = useIsMediumScreen()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 0.75], [0, 1, 1, 0])
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.75], [0, 1, 1, 0])
  const translate = useTransform(scrollYProgress, [0, 0.2, 0.55, 0.75], ['-250px', '0px', '0px', '250px'])

  return (
    <>
      <motion.div style={{ opacity: textOpacity, translateY: translate }} className={css.text}>
        <Typography variant="h1">{text}</Typography>
      </motion.div>
      <div className={css.gradientBox}></div>
      <motion.div style={{ opacity }} className={css.wave}>
        <Wave color="#12FF80" amplitude={isMobile ? 100 : 200} />
      </motion.div>
      <motion.div style={{ opacity }} className={css.wave}>
        <Wave color="#008A40" amplitude={isMobile ? 90 : 170} />
      </motion.div>
      <motion.div style={{ opacity }} className={css.wave}>
        <Wave color="#003C1C" amplitude={isMobile ? 80 : 140} />
      </motion.div>
    </>
  )
}
