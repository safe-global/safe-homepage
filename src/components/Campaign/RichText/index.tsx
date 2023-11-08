import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import type { Document as ContentfulDocument } from '@contentful/rich-text-types'

const RichText = (props: ContentfulDocument) => {
  return <>{documentToReactComponents(props)}</>
}

export default RichText
