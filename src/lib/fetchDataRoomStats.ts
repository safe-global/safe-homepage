import { DUNE_API_KEY } from '@/config/constants'
import { duneQueryUrlBuilder } from '@/lib/duneQueryUrlBuilder'

type DuneDataRoomStats = {
  annual_stake_fees: number
  annual_swap_fees: number
  annualised_outgoing_tvp: number
  cex_tvl_binance: string
  cex_tvl_bitfinex: string
  cex_tvl_bybit: string
  cex_tvl_okx: string
  cex_tvl_robinhood: string
  crypto_punks_perc: string
  defi_tvl_aave: string
  defi_tvl_eigenlayer: string
  defi_tvl_lido: string
  defi_tvl_maker: string
  defi_tvl_uniswap: string
  last_updated: number
  safe_tvl: number
  total_transfer_volume: number
  total_usdc_share: number
  transaction_share: number
  tvp_perc_world_gdp: number
  usdc_in_safes: number
}

const QUERY_ID_DATAROOM_STATS = 3864414

export const fetchDataRoomStats = async (): Promise<DuneDataRoomStats | null> => {
  return fetch(duneQueryUrlBuilder(QUERY_ID_DATAROOM_STATS, DUNE_API_KEY))
    .then((res) => {
      if (!res.ok) throw new Error('Response error')

      return res.json()
    })
    .then((data) => data.result.rows[0] as DuneDataRoomStats)
    .catch((err) => {
      console.error(`Error fetching data room stats: ${err.message}`)
      return null
    })
}
