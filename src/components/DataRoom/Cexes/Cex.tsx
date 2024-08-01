import css from './styles.module.css'
import { motion, type MotionProps } from 'framer-motion'
import { Typography } from '@mui/material'

export type CEX = {
  name: string
  boxes: number
  boxColor: string
  message: string
}

const textMotionProps: MotionProps = {
  initial: { opacity: 0, y: -10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    type: 'spring',
    stiffness: 260,
    damping: 20,
  },
}

const gridMotionProps: MotionProps = {
  initial: { scale: 0, x: -10 },
  whileInView: { scale: 1, x: 0 },
  viewport: { once: true },
  transition: {
    type: 'spring',
    stiffness: 260,
    damping: 20,
  },
}

export const Cex = ({ boxes, boxColor, name, message }: CEX) => (
  <div className={css.cex}>
    <div className={css.cexGrid}>
      {Array.from({ length: boxes }).map((_, index) => (
        <motion.div
          key={index}
          className={css.cexGridItem}
          style={{ backgroundColor: boxColor }}
          {...gridMotionProps}
          transition={{ ...gridMotionProps.transition, delay: index * 0.08 }}
        />
      ))}
    </div>
    <div className={css.cexLabelContainer}>
      <motion.div
        {...textMotionProps}
        className={css.cexName}
        transition={{ ...textMotionProps.transition, delay: 0.2 }}
      >
        <Typography variant="h4">{name}</Typography>
      </motion.div>
      <motion.div
        {...textMotionProps}
        className={css.cexMessage}
        transition={{ ...textMotionProps.transition, delay: 0.4 }}
      >
        <Typography variant="h5">{message}</Typography>
      </motion.div>
    </div>
  </div>
)
