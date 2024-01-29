import { Breadcrumbs, Typography } from '@mui/material'
import Link from 'next/link'
import css from './styles.module.css'
import { type UrlObject } from 'url'

const TYPOGRAPHY_VARIANT = 'caption'
const TYPOGRAPHY_COLOR = 'text.primary'

type BreadcrumbsType = {
  category: string
  title: string
}

const createBreadcrumb = (key: string, text: string, linkProps: string | UrlObject) => (
  <Link key={key} href={linkProps}>
    <Typography variant={TYPOGRAPHY_VARIANT} color={TYPOGRAPHY_COLOR}>
      {text}
    </Typography>
  </Link>
)

const BreadcrumbsNav = ({ category, title }: BreadcrumbsType) => {
  const breadcrumbs = [
    createBreadcrumb('1', 'Blog', { pathname: '/blog' }),
    createBreadcrumb('2', `#${category}`, { pathname: '/blog', query: { category } }),
    <Typography key="3" variant={TYPOGRAPHY_VARIANT} color={TYPOGRAPHY_COLOR}>
      {title}
    </Typography>,
  ]

  return (
    <Breadcrumbs separator=">" className={css.breadcrumbs}>
      {breadcrumbs}
    </Breadcrumbs>
  )
}

export default BreadcrumbsNav
