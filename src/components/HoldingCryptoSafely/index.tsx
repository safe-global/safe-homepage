import type { ReactElement } from 'react'
import PageContent from '@/components/common/PageContent'
import holdingCryptoSafelyContent from '@/content/holding-crypto-safely.json'

export const HoldingCryptoSafely = (): ReactElement => {
  return <PageContent content={holdingCryptoSafelyContent} path="holding-crypto-safely.json" />
}
