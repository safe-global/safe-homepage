import { type ComponentType, type ReactElement } from 'react'

type ComponentAndProps<T> = {
  component: ComponentType<T>
} & T

type ContentItems = Array<ComponentAndProps<any>>

const PageContent = ({ content, ...props }: { content: ContentItems }): ReactElement => {
  return (
    <>
      {content.map(({ component: Component, ...rest }, index) => {
        return <Component key={index} {...rest} {...props} />
      })}
    </>
  )
}

export default PageContent
