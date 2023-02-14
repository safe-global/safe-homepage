import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react'

type BaseBlock = {
  title: string | JSX.Element
  text: string | JSX.Element
  caption?: string
  link?: Link
  image?: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & { alt: string }
  items?: Array<Partial<BaseBlock>>
}

type Link = {
  title?: string
  href: string
}

type TextBlock = {
  textBlock: {
    title: string | JSX.Element
    text: string | JSX.Element
    buttons?: {
      text: string
      href?: string
      variant: 'button' | 'link'
    }[]
  }
}
