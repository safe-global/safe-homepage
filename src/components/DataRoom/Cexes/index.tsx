import type { BaseBlock } from '@/components/Home/types'
import { useScroll, useTransform } from 'framer-motion'
import css from './styles.module.css'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Typography } from '@mui/material'
import { Cex, type CEX } from './Cex'

const Cexes = ({ title, text, label, cexes }: BaseBlock & { cexes: CEX[]; label: string }) => {
  const backgroundRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: backgroundRef,
    offset: ['start end', 'end start'],
  })

  const transformLTR = useTransform(scrollYProgress, [0.5, 0.75], ['0%', '100%'])
  const transformRTL = useTransform(scrollYProgress, [0.5, 0.75], ['0', '-100%'])
  const opacityLTR = useTransform(scrollYProgress, [0.25, 0.35, 0.5, 0.75], [0, 1, 1, 0])
  const opacityRTL = useTransform(scrollYProgress, [0.1, 0.35, 0.5, 0.75], [0, 1, 1, 0])

  return (
    <div ref={backgroundRef} className={css.sectionContainer}>
      <div className={css.stickyContainer}>
        <motion.div
          style={{
            x: transformRTL,
            opacity: opacityRTL,
          }}
          className={css.label}
        >
          <Typography variant="h5">{label}</Typography>
        </motion.div>
        <motion.div
          style={{
            x: transformRTL,
            opacity: opacityRTL,
          }}
          className={css.cexesContainer}
        >
          {cexes.map((cex, index) => (
            <Cex key={index} boxes={cex.boxes} boxColor={cex.boxColor} name={cex.name} message={cex.message} />
          ))}
        </motion.div>
        <motion.div
          style={{
            x: transformLTR,
            opacity: opacityLTR,
          }}
          className={css.title}
        >
          <Typography variant="h2">
            {title} <br /> {text}
          </Typography>
        </motion.div>
      </div>
    </div>
  )
}

export default Cexes
