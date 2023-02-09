import useSWR from 'swr'

const CHAINS_URL = 'https://safe-client.safe.global/v1/chains'

export type ChainProps = {
  chainName: string
  textColor: string
  backgroundColor: string
}

const useChainsData = () => {
  const KEY = 'chains'

  return useSWR<ChainProps[]>(KEY, () =>
    fetch(CHAINS_URL)
      .then((res) => res.json())
      .then(({ results }) => {
        return results.map(
          (
            chain: {
              chainName: string
              theme: { textColor: string; backgroundColor: string }
            } & Record<string, unknown>,
          ) => ({
            chainName: chain.chainName,
            textColor: chain.theme.textColor,
            backgroundColor: chain.theme.backgroundColor,
          }),
        )
      }),
  )
}

export default useChainsData
