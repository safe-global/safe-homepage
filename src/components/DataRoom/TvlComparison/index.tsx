import css from './styles.module.css'
import { motion, type MotionProps } from 'framer-motion'
import { Typography } from '@mui/material'
import { formatValue } from '@/lib/formatValue'

export const enum ComparisonType {
  CEX = 'CEX',
  LEADER = 'Leader',
}

export type TvlComparisonProps = {
  name: string
  boxColor: string
  tvl: number
  normalizationFactor: number
  date?: string
  type: ComparisonType
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

const getGridMotionProps = (type: ComparisonType): MotionProps => ({
  initial: { scale: 0, x: -10 },
  whileInView: { scale: 1, x: 0 },
  viewport: { once: true },
  transition: {
    type: 'spring',
    ...(type === ComparisonType.CEX ? { stiffness: 260, damping: 20 } : { stiffness: 400, damping: 30, mass: 0.8 }),
  },
})

export const TvlComparison = ({ boxColor, name, normalizationFactor, tvl, date, type }: TvlComparisonProps) => {
  const boxes =
    type === ComparisonType.CEX ? Math.round(tvl / normalizationFactor) : Math.floor(tvl / normalizationFactor)
  const gridMotionProps = getGridMotionProps(type)

  return (
    <div className={type === ComparisonType.CEX ? css.inlineLabel : css.blockLabel}>
      <div className={type === ComparisonType.CEX ? css.linedItemsGrid : css.wrappedItemsGrid}>
        {Array.from({ length: boxes }).map((_, index) => (
          <motion.div
            key={index}
            className={`${css.gridItem} ${boxColor === 'main' && css.gridItemMain}`}
            {...gridMotionProps}
            transition={{ ...gridMotionProps.transition, delay: index * 0.04 }}
          />
        ))}
      </div>

      <div className={css.labelContainer}>
        <motion.div {...textMotionProps} transition={{ ...textMotionProps.transition, delay: 0.2 }}>
          <Typography className={type === ComparisonType.CEX ? css.cexTitle : css.labelCaption} variant="h4">
            {name}
            {type === ComparisonType.LEADER && '\u00A0'}
          </Typography>
        </motion.div>

        <motion.div {...textMotionProps} transition={{ ...textMotionProps.transition, delay: 0.4 }}>
          <Typography className={css.labelCaption} variant="h4">
            {type === ComparisonType.CEX ? '$' + formatValue(tvl) + ' as of ' + date : ' - $' + formatValue(tvl)}
          </Typography>
        </motion.div>
      </div>
    </div>
  )
}
