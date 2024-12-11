import type { ReactNode } from 'react'
import type { UrlObject } from 'url'
import { Breadcrumbs, Typography } from '@mui/material'
import Link from 'next/link'
import { AppRoutes } from '@/config/routes'
import AngleIcon from '@/public/images/angle-icon.svg'
import css from './styles.module.css'

const TYPOGRAPHY_VARIANT = 'body2'

type BreadcrumbsType = {
  category: string
  title: string
}

const createBreadcrumb = (key: string, text: ReactNode, linkProps: string | UrlObject) => (
  <Link key={key} href={linkProps}>
    <Typography variant={TYPOGRAPHY_VARIANT}>{text}</Typography>
  </Link>
)

const BreadcrumbsNav = ({ category, title }: BreadcrumbsType) => {
  const breadcrumbs = [
    createBreadcrumb('1', 'Blog', { pathname: AppRoutes.blog.index }),
    createBreadcrumb('2', category, {
      pathname: AppRoutes.blog.index,
      query: { category },
    }),
    <Typography key="3" variant={TYPOGRAPHY_VARIANT} className={css.title}>
      {title}
    </Typography>,
  ]

  return (
    <Breadcrumbs separator={<AngleIcon />} className={css.breadcrumbs}>
      {breadcrumbs}
    </Breadcrumbs>
  )
}

export default BreadcrumbsNav
