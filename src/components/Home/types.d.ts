import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react'
import type { ButtonProps } from '@mui/material'

type RichTextVariant = 'text' | 'link'

type BaseBlock = {
  title: string | JSX.Element
  text: string | JSX.Element
  richText?: (Pick<BaseBlock, 'text' | 'link'> & { variant: RichTextVariant })[]
  caption?: string
  link?: Link
  buttons?: Button[]
  image?: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & { alt: string }
  items?: Array<Partial<BaseBlock>>
}

type Link = {
  title?: string
  href: string
}

type Button = {
  text?: string
  href: string
  variant: 'button' | 'link'
  color?: ButtonProps['color']
}
