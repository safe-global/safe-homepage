import css from './styles.module.css'
import { motion, type MotionProps } from 'framer-motion'
import { Typography } from '@mui/material'
import { formatValue } from '@/lib/formatValue'

export type CEX = {
  name: string
  boxColor: string
  tvl: number
  normalizationFactor: number
  date: string
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

export const Cex = ({ boxColor, name, normalizationFactor, tvl, date }: CEX) => {
  const boxes = Math.round(tvl / normalizationFactor)

  return (
    <div className={css.cex}>
      <div className={css.cexGrid}>
        {Array.from({ length: boxes }).map((_, index) => (
          <motion.div
            key={index}
            className={css.cexGridItem}
            style={{
              backgroundColor:
                boxColor === 'main' ? 'var(--mui-palette-primary-main)' : 'var(--mui-palette-primary-light)',
            }}
            {...gridMotionProps}
            transition={{ ...gridMotionProps.transition, delay: index * 0.04 }}
          />
        ))}
      </div>
      <div className={css.cexLabelContainer}>
        <motion.div {...textMotionProps} transition={{ ...textMotionProps.transition, delay: 0.2 }}>
          <Typography variant="h4" className={css.cexName}>
            {name}
          </Typography>
        </motion.div>
        <motion.div {...textMotionProps} transition={{ ...textMotionProps.transition, delay: 0.4 }}>
          <Typography className={css.cexMessage} variant="h5">
            {'$' + formatValue(tvl) + ' as of ' + date}
          </Typography>
        </motion.div>
      </div>
    </div>
  )
}
