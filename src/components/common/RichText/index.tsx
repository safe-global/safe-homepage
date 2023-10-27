import { Typography } from '@mui/material'
import { type BaseBlock, type RichTextType } from '@/components/Home/types'
import css from './styles.module.css'

export const richTextVariants = {
  text: 'text',
  link: 'link',
} as const

const renderRichTextItem = (item: RichTextType) => {
  switch (item.variant) {
    case richTextVariants.text:
      return item.text

    case richTextVariants.link:
      return (
        item.link && (
          <a href={item.link.href} target="_blank" rel="noreferrer">
            {item.link.title}
          </a>
        )
      )

    default:
      return undefined
  }
}

type RichTextProps = {
  richText: BaseBlock['richText']
}

const RichText = ({ richText }: RichTextProps) => {
  if (!richText) return null

  return <Typography className={css.richText}>{richText.map(renderRichTextItem)}</Typography>
}

export default RichText
