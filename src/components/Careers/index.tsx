import type { ReactElement } from 'react'

import { Intro } from '@/components/Careers/Intro'
import { useOpenPositions } from '@/hooks/useOpenPositions'

export const Careers = (): ReactElement => {
  const positions = useOpenPositions()

  return <Intro positions={positions.length} />
}
