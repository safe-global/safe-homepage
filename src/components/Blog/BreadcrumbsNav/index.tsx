import { Breadcrumbs, Typography } from '@mui/material'
import Link from 'next/link'
import css from './styles.module.css'
import { type UrlObject } from 'url'
import CategoryIcon from '@/public/images/Blog/category-icon.svg'
import { type ReactNode } from 'react'
import { AppRoutes } from '@/config/routes'

const TYPOGRAPHY_VARIANT = 'caption'
const TYPOGRAPHY_COLOR = 'text.primary'

type BreadcrumbsType = {
  category: string
  title: string
}

const createBreadcrumb = (key: string, text: ReactNode, linkProps: string | UrlObject) => (
  <Link key={key} href={linkProps}>
    <Typography variant={TYPOGRAPHY_VARIANT} color={TYPOGRAPHY_COLOR}>
      {text}
    </Typography>
  </Link>
)

const BreadcrumbsNav = ({ category, title }: BreadcrumbsType) => {
  const breadcrumbs = [
    createBreadcrumb('1', 'Blog', { pathname: AppRoutes.blog.index }),
    createBreadcrumb(
      '2',
      <div className={css.category}>
        <CategoryIcon />
        {category}
      </div>,
      { pathname: AppRoutes.blog.index, query: { category } },
    ),
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
