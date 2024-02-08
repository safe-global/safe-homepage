export const duneQueryUrlBuilder = (queryId: number, apiKey: string) =>
  `https://api.dune.com/api/v1/query/${queryId}/results?api_key=${apiKey}`
