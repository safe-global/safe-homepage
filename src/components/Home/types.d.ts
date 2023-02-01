import { ReactNode } from 'react'

type BaseBlock = {
  title: string | JSX.Element
  text: string | JSX.Element
  caption?: string
  link?: Link
  icon?: ReactNode
  items?: Array<Partial<BaseBlock>>
}

type Link = {
  title?: string
  href: string
}
