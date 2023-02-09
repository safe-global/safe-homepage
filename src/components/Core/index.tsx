import { coreContent } from '@/components/Core/content'

export const Core = () => (
  <>
    {coreContent.map(({ component: Component, ...rest }, index) => {
      return <Component key={index} {...rest} />
    })}
  </>
)
