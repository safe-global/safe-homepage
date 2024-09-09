import { motion } from 'framer-motion'
import css from './styles.module.css'
import { Typography } from '@mui/material'
import { formatValue } from '@/lib/formatValue'
import type { FeeType } from './SlidingContent'

export type StackProps = FeeType & {
  value: number
  totalBars: number
}

const PER_BAR_AMOUNT = 1000000

const Stack = ({ totalBars, value, isLocked, label }: StackProps) => {
  // fillAmount represents how many bars will be filled
  // based on the ratio of the current value to the PER_BAR_AMOUNT ($1M)
  const fillAmount = value / PER_BAR_AMOUNT

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  }

  const barVariants = {
    hidden: { height: 0 },
    visible: (custom: number) => ({
      // Calculate the height percentage for each bar, capped at 100%
      // 'custom' represents the index of the current bar
      // subtracting it from fillAmount gives the correct fill level for each bar
      height: `${Math.min(100, (fillAmount - custom) * 100)}%`,
      transition: { duration: 0.5, ease: 'easeOut' },
    }),
  }

  return (
    <div className={css.fee}>
      <div className={css.feeAmount}>
        {isLocked ? (
          <Typography variant="h5" color="text.disabled">
            Coming Soon
          </Typography>
        ) : (
          <Typography variant="h1">
            <b>{'$' + formatValue(value)}</b>
          </Typography>
        )}
      </div>
      <motion.div
        className={css.barsContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {Array.from({ length: totalBars }).map((_, index) => (
          <div key={index} className={isLocked ? css.lockedBar : css.bar}>
            {!isLocked && <motion.div className={css.fill} variants={barVariants} custom={index} />}
          </div>
        ))}
        {isLocked && (
          <div className={css.lock}>
            <img src="/images/DataRoom/lock-icon.png" alt="Lock" className={css.lockImage} />
          </div>
        )}
      </motion.div>
      <Typography variant="h5">{label}</Typography>
    </div>
  )
}

export default Stack
