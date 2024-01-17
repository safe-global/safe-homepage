import { useMemo } from 'react'
import { Breadcrumbs, Link, Typography } from '@mui/material'
import css from '../styles.module.css'

type BreadcrumbsType = {
  category: string
  title: string
}

const BreadcrumbsNav = ({ category, title }: BreadcrumbsType) => {
  const breadcrumbs = useMemo(
    () => [
      <Typography key="1" variant="caption">
        <Link href="/blog" underline="hover">
          Blog
        </Link>
      </Typography>,
      <Typography key="2" variant="caption" color="text.primary">
        #{category}
      </Typography>,
      <Typography key="3" variant="caption" color="text.primary">
        {title}
      </Typography>,
    ],
    [category, title],
  )

  return (
    <Breadcrumbs separator=">" className={css.breadcrumbs}>
      {breadcrumbs}
    </Breadcrumbs>
  )
}

export default BreadcrumbsNav
