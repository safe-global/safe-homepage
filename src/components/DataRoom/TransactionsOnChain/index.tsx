import { Typography } from '@mui/material'
import dynamic from 'next/dynamic'
import type { BaseBlock } from '@/components/Home/types'
import LinksWrapper from '../LinksWrapper'
import { useSafeDataRoomStats } from '@/hooks/useSafeDataRoomStats'
import css from './styles.module.css'

const CounterContainer = dynamic(() => import('./CounterContainer'))

const TRANSACTIONS_ON_CHAIN_PERCENTAGE_FALLBACK = 1.75

const TransactionsOnChain = ({ text, link }: BaseBlock) => {
  const { onChainTransactionsPercentage } = useSafeDataRoomStats()

  const value = onChainTransactionsPercentage || TRANSACTIONS_ON_CHAIN_PERCENTAGE_FALLBACK
  // Converts to percentage with 2 decimal place
  const percentageValue = +(value * 100).toFixed(2)

  return (
    <div className={css.sectionContainer}>
      <div className={css.stickyContainer}>
        <div className={css.content}>
          <CounterContainer percentage={percentageValue} />
          <Typography className={css.text} variant="h1">
            {text}
          </Typography>
        </div>

        <div className={css.linkContainer}>{link && <LinksWrapper link={link} />}</div>
      </div>
    </div>
  )
}

export default TransactionsOnChain
