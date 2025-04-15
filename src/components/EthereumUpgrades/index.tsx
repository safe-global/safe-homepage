import type { ReactElement } from 'react'
import PageContent from '@/components/common/PageContent'
import EthereumUpgradesContent from '@/content/ethereum-upgrades.json'

export const EthereumUpgrades = (): ReactElement => {
  return <PageContent content={EthereumUpgradesContent} path="ethereum-upgrades.json" />
}
