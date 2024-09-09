import type { RefObject } from 'react'
import { Typography } from '@mui/material'
import { motion, useTransform } from 'framer-motion'
import useScrollProgress from '@/hooks/useScrollProgress'
import type { BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'

export default function SlidingContent({
  text,
  containerRef,
}: {
  text: BaseBlock['text']
  containerRef: RefObject<HTMLDivElement>
}) {
  const { scrollYProgress } = useScrollProgress(containerRef)

  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.65], [0, 1, 1, 0])
  const translate = useTransform(scrollYProgress, [0, 0.2, 0.55, 0.75], ['-250px', '0px', '0px', '250px'])

  return (
    <motion.div style={{ opacity: textOpacity, translateY: translate }} className={css.text}>
      <Typography variant="h1">{text}</Typography>
    </motion.div>
  )
}
