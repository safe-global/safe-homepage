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

  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 0.85], [0, 1, 1, 0])
  const translate = useTransform(scrollYProgress, [0, 0.85], ['0px', '400px'])

  return (
    <motion.div style={{ opacity: textOpacity, translateY: translate }} className={css.text}>
      <Typography variant="h1">{text}</Typography>
    </motion.div>
  )
}
