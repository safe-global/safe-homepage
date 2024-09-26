import css from './styles.module.css'
import { motion, type MotionProps } from 'framer-motion'
import { Typography } from '@mui/material'
import { formatValue } from '@/lib/formatValue'

export type ComparisonProps = {
  name: string
  boxColor: string
  tvl: number
  normalizationFactor: number
  date?: string
  type: 'CEX' | 'Leader'
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

const getGridMotionProps = (type: 'CEX' | 'Leader'): MotionProps => ({
  initial: { scale: 0, x: -10 },
  whileInView: { scale: 1, x: 0 },
  viewport: { once: true },
  transition: {
    type: 'spring',
    ...(type === 'CEX' ? { stiffness: 260, damping: 20 } : { stiffness: 400, damping: 30, mass: 0.8 }),
  },
})

export const ExternalComparison = ({ boxColor, name, normalizationFactor, tvl, date, type }: ComparisonProps) => {
  const boxes = type === 'CEX' ? Math.round(tvl / normalizationFactor) : Math.floor(tvl / normalizationFactor)
  const gridMotionProps = getGridMotionProps(type)

  return (
    <div className={type === 'CEX' ? css.cex : css.leader}>
      <div className={type === 'CEX' ? css.cexGrid : css.leaderGrid}>
        {Array.from({ length: boxes }).map((_, index) => (
          <motion.div
            key={index}
            className={`${css.gridItem} ${boxColor === 'main' && css.gridItemMain}`}
            {...gridMotionProps}
            transition={{ ...gridMotionProps.transition, delay: index * 0.04 }}
          />
        ))}
      </div>

      <div className={type === 'CEX' ? css.cexLabelContainer : css.leaderLabelContainer}>
        <motion.div {...textMotionProps} transition={{ ...textMotionProps.transition, delay: 0.2 }}>
          <Typography className={type === 'CEX' ? css.cexTitle : css.labelCaption} variant="h4">
            {name}
            {type === 'Leader' && '\u00A0'}
          </Typography>
        </motion.div>

        <motion.div {...textMotionProps} transition={{ ...textMotionProps.transition, delay: 0.4 }}>
          <Typography className={css.labelCaption} variant="h4">
            {type === 'CEX' ? '$' + formatValue(tvl) + ' as of ' + date : ' - $' + formatValue(tvl)}
          </Typography>
        </motion.div>
      </div>
    </div>
  )
}
