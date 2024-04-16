import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react'
import type { ButtonProps } from '@mui/material'

type BaseBlock = {
  title: string | JSX.Element
  text: string | JSX.Element
  caption?: string
  link?: Link
  buttons?: Button[]
  image?: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & { alt: string }
  items?: Array<Partial<BaseBlock>>
}

type HeroVideoBlock = {
  titleLines: [string | JSX.Element, string | JSX.ELement]
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
