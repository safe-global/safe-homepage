import type { InferGetStaticPropsType, NextPage } from 'next'
import { DataRoom } from '@/components/DataRoom'
import { fetchDataRoomStats } from '@/hooks/useSafeDataRoomStats'

const DataRoomPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return <DataRoom {...props} />
}

export async function getStaticProps() {
  const dataRoomStats = await fetchDataRoomStats()

  if (!dataRoomStats) return null

  const {
    tvl_perc_world_gdp,
    total_usdc_share,
    crypto_punks_perc,
    safe_tvl,
    total_transfer_volume,
    transaction_share,
  } = dataRoomStats

  return {
    props: {
      safeDataRoomStats: {
        tvlToGDPPercentage: tvl_perc_world_gdp,
        totalValueLocked: safe_tvl,
        usdcPercentageStored: total_usdc_share,
        // This is a temp workaround. The received value should be a number.
        cryptoPunksStoredPercentage: Number(crypto_punks_perc),
        totalVolumeTransfered: total_transfer_volume,
        onChainTransactionsPercentage: transaction_share,
      },
    },
  }
}

export default DataRoomPage
