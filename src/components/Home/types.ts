import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react'
import type { ButtonProps } from '@mui/material'

export type BaseBlock = {
  title: string | JSX.Element
  text: string | JSX.Element
  caption?: string
  link?: Link
  buttons?: Button[]
  image?: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & { alt: string }
  items?: Array<Partial<BaseBlock>>
}

export type Link = {
  title?: string
  href: string
}

export type Button = {
  text?: string
  href: string
  variant: 'button' | 'link'
  color?: ButtonProps['color']
  isDisabled?: boolean
}

export type BlockWithVariant = {
  variant: 'image-text' | 'text-image'
  mobileVariant?: 'image-text' | 'text-image'
}
