import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react'
import type { ButtonProps } from '@mui/material'
import type { richTextVariants } from '@/components/common/RichText'

type BaseBlock = {
  title: string | JSX.Element
  text: string | JSX.Element
  richText?: RichTextType[]
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

type RichTextVariantType = keyof typeof richTextVariants
type RichTextType = Pick<BaseBlock, RichTextVariantType> & { variant: RichTextVariantType }
