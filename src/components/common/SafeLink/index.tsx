import SearchParamsContext from '@/contexts/SearchParamsContext'
import { type ReactNode, useContext, useMemo } from 'react'
import Link from 'next/link'
import { appendSearchParamsToURL } from '@/lib/appendSearchParamsToURL'
import css from './styles.module.css'

const SafeLink = ({
  href,
  children,
  isDisabled = false,
}: {
  href: string
  children: ReactNode
  isDisabled?: boolean
}) => {
  const searchParams = useContext(SearchParamsContext)

  const finalHref = useMemo(() => appendSearchParamsToURL(href, searchParams), [href, searchParams])

  return (
    <Link href={finalHref} target="_blank" className={`${isDisabled ? css.disabled : ''}`}>
      {children}
    </Link>
  )
}

export default SafeLink
