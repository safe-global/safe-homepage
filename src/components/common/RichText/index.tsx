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
import kebabCase from 'lodash/kebabCase'
import { isTwitterUrl, isYouTubeUrl } from '@/lib/urlPatterns'
import MediaPlayer from '@/components/common/MediaPlayer'
import Twitter from '@/components/Blog/Twitter'

const options: Options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node: Hyperlink) => {
      const text = node.content.find(isText)?.value
      return (
        <a className={css.hyperlink} href={node.data.uri} target="_blank" rel="noreferrer">
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

      return (
        <Typography id={kebabCase(text)} variant="h3" mt="60px">
          {text}
        </Typography>
      )
    },
    [BLOCKS.HEADING_5]: (node: Heading3) => {
      const text = node.content.find(isText)?.value
      return <Typography variant="h5">{text}</Typography>
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
              {description && <span className={css.caption}>{description}</span>}
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
    [BLOCKS.EMBEDDED_ENTRY]: (node: Node) => {
      const entryUrl = node.data.target.fields.url

      return isYouTubeUrl(entryUrl) ? (
        <MediaPlayer url={entryUrl} />
      ) : isTwitterUrl(entryUrl) ? (
        <Twitter url={entryUrl} />
      ) : null
    },
  },
} as unknown as RenderNode

const RichText = (props: ContentfulDocument) => {
  return <>{documentToReactComponents(props, options)}</>
}

export default RichText
