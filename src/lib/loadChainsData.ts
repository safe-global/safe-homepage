import { CHAINS_URL } from '@/config/constants'
import type { ChainProps } from '@/components/common/Networks'

export const loadChainsData = async (): Promise<ChainProps[]> => {
  const result = await fetch(CHAINS_URL)
  const data = await result.json()

  return data.results.map(
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
}
