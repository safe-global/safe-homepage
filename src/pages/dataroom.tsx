import type { InferGetStaticPropsType, NextPage } from 'next'
import { DataRoom } from '@/components/DataRoom'
import { fetchDataRoomStats } from '@/lib/fetchDataRoomStats'

// Fallback data as of 12.03.2025
const DATA_ROOM_STATS_FALLBACK = {
  annualStakeFees: 107155.19136,
  annualSwapFees: 2110635.0288202274,
  annualisedOutgoingTVP: 214654624913.06125,
  cryptoPunksStoredPercentage: 0.0970999999999999999979075,
  lastUpdated: 1740577705.913,
  onChainTransactionsPercentage: 0.026531030213325157,
  totalVolumeTransferred: 953223119484.5577,
  tvlAAVE: 19023309395.7664,
  tvlBinance: 138294085853.49887,
  tvlEigenLayer: 10710215713.14545,
  tvlLido: 23090840136.379456,
  tvlOKX: 24070217201.141243,
  tvlRobinhoodCEX: 17012090928.34492,
  tvlSafe: 71441479840.45575,
  tvlUniswap: 4473126543.502114,
  tvpToGDPPercentage: 0.002127830684003469,
  usdcPercentageStored: 0.04487221394865841,
}

const DataRoomPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return <DataRoom {...props} />
}

export async function getStaticProps() {
  const dataRoomStats = await fetchDataRoomStats()

  if (!dataRoomStats) {
    return {
      props: {
        safeDataRoomStats: DATA_ROOM_STATS_FALLBACK,
      },
    }
  }

  const {
    annual_stake_fees,
    annual_swap_fees,
    annualised_outgoing_tvp,
    cex_tvl_binance,
    // cex_tvl_bitfinex,
    // cex_tvl_bybit,
    cex_tvl_okx,
    cex_tvl_robinhood,
    crypto_punks_perc,
    defi_tvl_aave,
    defi_tvl_eigenlayer,
    defi_tvl_lido,
    // defi_tvl_maker,
    defi_tvl_uniswap,
    last_updated,
    safe_tvl,
    total_transfer_volume,
    total_usdc_share,
    transaction_share,
    tvp_perc_world_gdp,
    // usdc_in_safes,
  } = dataRoomStats

  return {
    props: {
      safeDataRoomStats: {
        annualStakeFees: Number(annual_stake_fees),
        annualSwapFees: Number(annual_swap_fees),
        annualisedOutgoingTVP: annualised_outgoing_tvp,
        cryptoPunksStoredPercentage: Number(crypto_punks_perc),
        lastUpdated: Number(last_updated),
        onChainTransactionsPercentage: transaction_share,
        totalVolumeTransferred: total_transfer_volume,
        tvlAAVE: Number(defi_tvl_aave),
        tvlBinance: Number(cex_tvl_binance),
        tvlEigenLayer: Number(defi_tvl_eigenlayer),
        tvlLido: Number(defi_tvl_lido),
        tvlOKX: Number(cex_tvl_okx),
        tvlRobinhoodCEX: Number(cex_tvl_robinhood),
        tvlSafe: Number(safe_tvl),
        tvlUniswap: Number(defi_tvl_uniswap),
        tvpToGDPPercentage: tvp_perc_world_gdp,
        usdcPercentageStored: total_usdc_share,
      },
    },
  }
}

export default DataRoomPage
