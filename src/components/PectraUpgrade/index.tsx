import type { ReactElement } from 'react'
import PageContent from '@/components/common/PageContent'
import pectraUpgradeContent from '@/content/pectra-upgrade.json'

export const PectraUpgrade = (): ReactElement => {
  return <PageContent content={pectraUpgradeContent} path="pectra-upgrade.json" />
}
