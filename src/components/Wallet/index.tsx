import type { InferGetStaticPropsType } from 'next'
import PageContent from '../common/PageContent'
import type { getStaticProps } from '@/pages/wallet'
import walletContent from '@/content/wallet.json'
import FaqContentContext from '@/contexts/FaqContentContext'
import SafeDataRoomContext from '@/contexts/SafeDataRoomContext'
import SafeStatsContext from '@/contexts/SafeStatsContext'

export const Wallet = ({
  pageData,
  safeDataRoomStats,
  safeStatsData,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <SafeStatsContext.Provider value={safeStatsData}>
    <SafeDataRoomContext.Provider value={safeDataRoomStats}>
      <FaqContentContext.Provider value={pageData}>
        <PageContent content={walletContent} path="wallet.json" />
      </FaqContentContext.Provider>
    </SafeDataRoomContext.Provider>
  </SafeStatsContext.Provider>
)
