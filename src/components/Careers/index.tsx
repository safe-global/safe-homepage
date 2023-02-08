import type { ReactElement } from 'react'

import { careersContent } from '@/components/Careers/content'

export const Careers = (): ReactElement => {
  return (
    <>
      {careersContent.map(({ component: Component, ...rest }, index) => {
        return <Component key={index} {...rest} />
      })}
    </>
  )
}
