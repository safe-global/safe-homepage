import kebabCase from 'lodash/kebabCase'
import css from '../styles.module.css'
import { BLOCKS, type Document as ContentfulDocument, type Text } from '@contentful/rich-text-types'
import { isText } from '@/lib/typeGuards'
import { useMemo } from 'react'
import { scrollToElement } from '@/lib/scrollSmooth'

const ContentTable = ({ content }: { content: ContentfulDocument }) => {
  const handleContentTableClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault()

    scrollToElement(`#${target}`, 100)
  }

  const headings = useMemo(
    () =>
      content.content
        .filter((item) => item.nodeType === BLOCKS.HEADING_3)
        .filter((item) => isText(item.content[0]))
        .map((item) => ({
          id: (item.content[0] as Text).value,
          text: (item.content[0] as Text).value,
        })),
    [content],
  )

  return (
    <ul className={css.contentTable}>
      {headings.map((heading) => {
        const headingKey = kebabCase(heading.id)

        return (
          <li key={headingKey}>
            <a onClick={(e) => handleContentTableClick(e, headingKey)} href={`#${headingKey}`}>
              {heading.text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default ContentTable
