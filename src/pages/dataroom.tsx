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
    tvp_perc_world_gdp,
    total_usdc_share,
    crypto_punks_perc,
    total_transfer_volume,
    transaction_share,
    safe_tvl,
    cex_tvl_robinhood,
    cex_tvl_okx,
    cex_tvl_binance,
    defi_tvl_aave,
    defi_tvl_eigenlayer,
    defi_tvl_lido,
    defi_tvl_uniswap,
    last_updated,
    annual_swap_fees,
  } = dataRoomStats

  return {
    props: {
      safeDataRoomStats: {
        tvpToGDPPercentage: tvp_perc_world_gdp,
        usdcPercentageStored: total_usdc_share,
        // This is a temp workaround. The received value should be a number.
        cryptoPunksStoredPercentage: Number(crypto_punks_perc),
        totalVolumeTransferred: total_transfer_volume,
        onChainTransactionsPercentage: transaction_share,
        tvlSafe: Number(safe_tvl),
        tvlRobinhoodCEX: Number(cex_tvl_robinhood),
        tvlOKX: Number(cex_tvl_okx),
        tvlBinance: Number(cex_tvl_binance),
        tvlLido: Number(defi_tvl_lido),
        tvlAAVE: Number(defi_tvl_aave),
        tvlEigenLayer: Number(defi_tvl_eigenlayer),
        tvlUniswap: Number(defi_tvl_uniswap),
        lastUpdated: Number(last_updated),
        annualSwapFees: Number(annual_swap_fees),
      },
    },
  }
}

export default DataRoomPage
