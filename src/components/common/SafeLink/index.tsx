import SearchParamsContext from '@/contexts/SearchParamsContext'
import { type ReactNode, useContext } from 'react'
import Link from 'next/link'
import { appendSearchParamsToURL } from '@/lib/appendSearchParamsToURL'

const SafeLink = ({ href, children }: { href: string; children: ReactNode }) => {
  const searchParams = useContext(SearchParamsContext)

  const finalHref = appendSearchParamsToURL(href, searchParams)

  return (
    <Link href={finalHref} target="_blank" rel="noreferrer">
      {children}
    </Link>
  )
}

export default SafeLink
