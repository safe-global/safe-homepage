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
    total_transfer_volume,
    transaction_share,
    cex_tvl_robinhood,
    cex_tvl_okx,
    cex_tvl_binance,
  } = dataRoomStats

  return {
    props: {
      safeDataRoomStats: {
        tvlToGDPPercentage: tvl_perc_world_gdp,
        usdcPercentageStored: total_usdc_share,
        // This is a temp workaround. The received value should be a number.
        cryptoPunksStoredPercentage: Number(crypto_punks_perc),
        totalVolumeTransfered: total_transfer_volume,
        onChainTransactionsPercentage: transaction_share,
        tvlRobinhood: Number(cex_tvl_robinhood),
        tvlOKX: Number(cex_tvl_okx),
        tvlBinance: Number(cex_tvl_binance),
      },
    },
  }
}

export default DataRoomPage
