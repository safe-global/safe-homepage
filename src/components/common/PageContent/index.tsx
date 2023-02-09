import { type ComponentType, type ReactElement } from 'react'

type ContentItem = any & {
  component: ComponentType
}

const PageContent = ({ content }: { content: ContentItem[] }): ReactElement => {
  return (
    <>
      {content.map(({ component: Component, ...rest }, index) => {
        return <Component key={index} {...rest} />
      })}
    </>
  )
}

export default PageContent
