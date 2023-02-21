import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react'
import type { StepsType } from '@/components/Wallet/Stepper'

type BaseBlock = {
  titleImage?: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & { alt: string }
  title: string | JSX.Element
  text: string | JSX.Element
  caption?: string
  link?: Link
  buttons?: Buttons
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
}

type Buttons = Array<Button>

type TextBlock = {
  textBlock: {
    caption?: string
    title: string | JSX.Element
    text: string | JSX.Element
    buttons?: {
      text: string
      href?: string
      variant: 'button' | 'link'
    }[]
    steps?: StepsType
  }
}
