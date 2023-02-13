import { getChainsConfig } from '@safe-global/safe-gateway-typescript-sdk'
import type { ChainProps } from '@/components/common/Networks'

export const loadChainsData = async (): Promise<ChainProps[]> => {
  const data = await getChainsConfig()

  return data.results.map((chain) => ({
    chainName: chain.chainName,
    textColor: chain.theme.textColor,
    backgroundColor: chain.theme.backgroundColor,
  }))
}
