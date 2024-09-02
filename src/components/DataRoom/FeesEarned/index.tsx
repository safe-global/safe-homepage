import { Typography } from '@mui/material'
import { type BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'
import type { FeeType } from './Fee'
import Fee from './Fee'

const FeesEarned = ({ title, fees }: BaseBlock & { fees: FeeType[] }) => {
  return (
    <div className={css.sectionContainer}>
      <div className={css.stickyContainer}>
        <Typography variant="h2" align="right">
          {title}
        </Typography>
        <div className={css.feeContainer}>
          {fees.map((fee, index) => (
            <Fee key={index} totalBars={10} feeAmount={fee.feeAmount || 0} isLocked={fee.isLocked} label={fee.label} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeesEarned
