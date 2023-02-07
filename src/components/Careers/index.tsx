import type { ReactElement } from 'react'

import { careersContent } from '@/components/Careers/content'
import { useOpenPositions } from '@/hooks/useOpenPositions'

export const Careers = (): ReactElement => {
  const [positions = []] = useOpenPositions()
  return (
    <>
      {careersContent.map(({ component: Component, ...rest }, index) => {
        return <Component key={index} positions={positions} {...rest} />
      })}
    </>
  )
}
