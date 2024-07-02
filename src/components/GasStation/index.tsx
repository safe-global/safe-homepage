import type { ReactElement } from 'react'
import PageContent from '@/components/common/PageContent'
import gasStationContent from '@/content/gas-station.json'

export const GasStation = (): ReactElement => {
  return <PageContent content={gasStationContent} path="gas-station.json" />
}
