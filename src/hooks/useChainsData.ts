import { useEffect, useState } from 'react'

const CHAINS_URL = 'https://safe-client.safe.global/v1/chains'

export type ChainProps = {
  chainName: string
  textColor: string
  backgroundColor: string
}

// TODO: useAsync after careers page is merged
const useChainsData = (): ChainProps[] => {
  const [chainsData, setChainsData] = useState<ChainProps[]>([])

  useEffect(() => {
    const fetchChains = async () => {
      try {
        const response = await fetch(CHAINS_URL)
        const data = await response.json()
        const chains = data.results.map(
          (chain: { chainName: string; theme: { textColor: string; backgroundColor: string } }) => ({
            chainName: chain.chainName,
            textColor: chain.theme.textColor,
            backgroundColor: chain.theme.backgroundColor,
          }),
        )
        setChainsData(chains)
      } catch (error) {
        console.error('Error fetching chains data', error)
      }
    }

    fetchChains()
  }, [])

  return chainsData
}

export default useChainsData
