import { motion } from 'framer-motion'
import css from './styles.module.css'
import { Typography } from '@mui/material'
import { formatValue } from '@/lib/formatValue'

export type FeeType = {
  label: string
  isLocked: boolean
  feeAmount: number
}

const Fee = ({ totalBars, feeAmount, isLocked, label }: FeeType & { totalBars: number }) => {
  const fillAmount = feeAmount / 1000000

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
      height: `${Math.min(100, (fillAmount - custom) * 100)}%`,
      transition: { duration: 0.5, ease: 'easeOut' },
    }),
  }

  return (
    <div className={css.fee}>
      <div className={css.feeAmount}>
        {isLocked ? (
          <Typography variant="h5" color="#686868">
            Coming Soon
          </Typography>
        ) : (
          <Typography variant="h1">
            <b>{'$' + formatValue(feeAmount)}</b>
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
            <img src="/images/DataRoom/lock-icon.png" alt="Lock" width={60} height={60} />
          </div>
        )}
      </motion.div>
      <Typography variant="h5">{label}</Typography>
    </div>
  )
}

export default Fee
