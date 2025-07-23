import { documentToReactComponents, type RenderNode, type Options } from '@contentful/rich-text-react-renderer'
import {
  INLINES,
  type Document as ContentfulDocument,
  type Hyperlink,
  BLOCKS,
  MARKS,
  type Node,
  type Heading1,
  type Heading2,
  type Heading3,
  type Heading5,
} from '@contentful/rich-text-types'
import css from './styles.module.css'
import { Typography } from '@mui/material'
import { isText } from '@/lib/typeGuards'
import kebabCase from 'lodash/kebabCase'
import { isTwitterUrl, isYouTubeUrl } from '@/lib/urlPatterns'
import MediaPlayer from '@/components/common/MediaPlayer'
import Twitter from '@/components/Blog/Twitter'

const generateTextContent = (node: Heading1 | Heading2 | Heading3 | Heading5) => {
  return node.content.filter(isText).map((node, index) => {
    const isBold = node.marks.some((mark) => mark.type === 'bold')
    const isItalic = node.marks.some((mark) => mark.type === 'italic')
    return isBold ? (
      <b key={index}>{node.value}</b>
    ) : isItalic ? (
      <i key={index}>{node.value}</i>
    ) : (
      <span key={index}>{node.value}</span>
    )
  })
}

const options: Options = {
  renderMark: {
    [MARKS.CODE]: (text: string) => {
      return <code className={css.code}>{text}</code>
    },
  },
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
      const content = generateTextContent(node)
      return <Typography variant="h1">{content}</Typography>
    },
    [BLOCKS.HEADING_2]: (node: Heading2) => {
      const content = generateTextContent(node)
      return <Typography variant="h2">{content}</Typography>
    },
    [BLOCKS.HEADING_3]: (node: Heading3) => {
      const content = generateTextContent(node)

      return (
        <Typography variant="h3" className={css.section} id={kebabCase(node.content.find(isText)?.value)}>
          {content}
        </Typography>
      )
    },
    [BLOCKS.HEADING_5]: (node: Heading5) => {
      const content = generateTextContent(node)
      return <Typography variant="h5">{content}</Typography>
    },
    [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
      const { title, description, file } = node.data.target.fields

      // Map the contentful tags to custom classes
      const classNames: string[] = (node.data.target.metadata.tags as { sys: { id: string } }[])
        .map(({ sys }) => css[sys.id])
        .filter((val) => val !== undefined)
      const mimeType = file.contentType
      const mimeGroup = mimeType.split('/')[0]

      return (
        <>
          {mimeGroup === 'image' && (
            <div className={css.imageContainer}>
              <img title={title} alt={description} src={file.url} className={classNames.join(',')} />
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
