import type { ReactElement } from 'react'
import PageContent from '@/components/common/PageContent'
import coreContent from '@/content/core.json'
import { useDelayedScrollAnimation } from '@/hooks/useDelayedScrollAnimation'

export const Core = (): ReactElement => {
  useDelayedScrollAnimation('masthead', 1000, 500, 0.2)

  return <PageContent content={coreContent} path="core.json" />
}
