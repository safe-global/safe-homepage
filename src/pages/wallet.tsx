import type { InferGetStaticPropsType, NextPage } from 'next'
import client from '@/lib/contentful'
import { Wallet } from '@/components/Wallet'
import type { TypeBaseBlockSkeleton } from '@/contentful/types'
import { fetchDataRoomStats } from '@/hooks/useSafeDataRoomStats'
import { fetchMonthlyActiveUsers, fetchTotalBalanceUsd } from '@/hooks/useSafeStats'

const FAQ_CONTENT_TYPE_ID = '1jCIVFDUzFO1okK8b6TTxS'

const WalletPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => <Wallet {...props} />

export async function getStaticProps() {
  const faqContent = await client.getEntry<TypeBaseBlockSkeleton>(FAQ_CONTENT_TYPE_ID)
  const dataRoomStats = await fetchDataRoomStats()
  const totalBalanceUsd = await fetchTotalBalanceUsd()
  const monthlyActiveUsers = await fetchMonthlyActiveUsers()

  return {
    props: {
      pageData: { faqContent },
      safeDataRoomStats: { annualisedOutgoingTVP: dataRoomStats?.annualised_outgoing_tvp },
      safeStatsData: { totalBalanceUsd, monthlyActiveUsers },
    },
  }
}

export default WalletPage
