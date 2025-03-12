import { Typography } from '@mui/material'
import dynamic from 'next/dynamic'
import type { BaseBlock } from '@/components/Home/types'
import LinksWrapper from '../LinksWrapper'
import { useSafeDataRoomStats } from '@/hooks/useSafeDataRoomStats'
import css from './styles.module.css'

const CounterContainer = dynamic(() => import('./CounterContainer'))

const TRANSACTIONS_ON_CHAIN_PERCENTAGE_FALLBACK = 0.0265

const TransactionsOnChain = ({ text, link }: BaseBlock) => {
  const { onChainTransactionsPercentage } = useSafeDataRoomStats()

  const value = onChainTransactionsPercentage || TRANSACTIONS_ON_CHAIN_PERCENTAGE_FALLBACK
  // Converts to percentage with 2 decimal place
  const percentageValue = +(value * 100).toFixed(2)

  return (
    <div className={css.sectionContainer}>
      <div className={css.stickyContainer}>
        <CounterContainer percentage={percentageValue} />

        <div className={css.content}>
          <Typography variant="h1">{text}</Typography>

          <div className={css.linkContainer}>{link && <LinksWrapper link={link} />}</div>
        </div>
      </div>
    </div>
  )
}

export default TransactionsOnChain
