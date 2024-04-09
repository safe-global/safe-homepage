import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react'
import type { ButtonProps } from '@mui/material'
import type { TypeBaseBlockSkeleton } from '@/contentful/types'
import type { Entry } from 'contentful'

type BaseBlock = {
  title: string | JSX.Element
  text: string | JSX.Element
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

type BaseBlockEntry = Entry<TypeBaseBlockSkeleton, undefined, string>
