const QUERY_ID_TOTAL_ASSETS_BY_CHAIN = 3609251

export const fetchTotalBalanceUsd = async (): Promise<number | null> => {
  // TODO: Uncomment this code after agreeing with the narrative team on the data source
  return null
  // return fetch(duneQueryUrlBuilder(QUERY_ID_TOTAL_ASSETS_BY_CHAIN, DUNE_API_KEY))
  //   .then((res) => res.json())
  //   .then((data) => {
  //     return data.result.rows[0].total_balance_usd
  //   })
  //   .catch(() => null)
}
