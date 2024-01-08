import { documentToReactComponents, type RenderNode, type Options } from '@contentful/rich-text-react-renderer'
import {
  INLINES,
  type Document as ContentfulDocument,
  type Hyperlink,
  BLOCKS,
  type Node,
  type Heading1,
  type Heading2,
  type Heading3,
} from '@contentful/rich-text-types'
import css from './styles.module.css'
import { Typography } from '@mui/material'
import { isText } from '@/lib/typeGuards'

const options: Options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node: Hyperlink) => {
      const text = node.content.find(isText)?.value
      return (
        <a href={node.data.uri} target="_blank" rel="noreferrer">
          {text}
        </a>
      )
    },
    [BLOCKS.HEADING_1]: (node: Heading1) => {
      const text = node.content.find(isText)?.value
      return <Typography variant="h1">{text}</Typography>
    },
    [BLOCKS.HEADING_2]: (node: Heading2) => {
      const text = node.content.find(isText)?.value
      return <Typography variant="h2">{text}</Typography>
    },
    [BLOCKS.HEADING_3]: (node: Heading3) => {
      const text = node.content.find(isText)?.value
      return <Typography variant="h3">{text}</Typography>
    },
    [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
      const { title, description, file } = node.data.target.fields

      const mimeType = file.contentType
      const mimeGroup = mimeType.split('/')[0]

      return (
        <>
          {mimeGroup === 'image' && (
            <div className={css.imageContainer}>
              <img title={title} alt={description} src={file.url} />
            </div>
          )}
          {mimeGroup === 'video' && (
            <div className={css.videoContainer}>
              <video controls>
                <source src={file.url} type={mimeType} />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </>
      )
    },
  } as unknown as RenderNode,
}

const RichText = (props: ContentfulDocument) => {
  return <>{documentToReactComponents(props, options)}</>
}

export default RichText
