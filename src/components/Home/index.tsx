import type { ReactElement } from 'react'
import { homeContent } from '@/components/Home/content'

export const Home = (): ReactElement => {
  return (
    <>
      {homeContent.map(({ component: Component, ...rest }, index) => {
        return <Component key={index} {...rest} />
      })}
    </>
  )
}
