import { documentToReactComponents, type RenderNode, type Options } from '@contentful/rich-text-react-renderer'
import { INLINES, type Document as ContentfulDocument, type Hyperlink } from '@contentful/rich-text-types'

const options: Options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node: Hyperlink) => {
      const text = node.content.find((item) => item.nodeType === 'text')?.value
      return (
        <a href={node.data.uri} target="_blank" rel="noreferrer">
          {text}
        </a>
      )
    },
  } as unknown as RenderNode,
}

const RichText = (props: ContentfulDocument) => {
  return <>{documentToReactComponents(props, options)}</>
}

export default RichText
