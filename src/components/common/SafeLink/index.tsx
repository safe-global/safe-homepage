import SearchParamsContext from '@/contexts/SearchParamsContext'
import { type ReactNode, useContext, useMemo } from 'react'
import Link from 'next/link'
import { appendSearchParamsToURL } from '@/lib/appendSearchParamsToURL'

const SafeLink = ({ href, children }: { href: string; children: ReactNode }) => {
  const searchParams = useContext(SearchParamsContext)

  const finalHref = useMemo(() => appendSearchParamsToURL(href, searchParams), [href, searchParams])

  return (
    <Link href={finalHref} target="_blank">
      {children}
    </Link>
  )
}

export default SafeLink
