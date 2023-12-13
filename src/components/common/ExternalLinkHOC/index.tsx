import { mergeSearchParams } from '@/lib/mergeSearchParams'
import { useSearchParams } from 'next/navigation'

type ExternalLinkHOCProps = {
  href: string
  children: React.ReactNode
}

const ExternalLinkHOC = ({ href, children }: ExternalLinkHOCProps) => {
  const searchParams = useSearchParams()

  const url = new URL(href)
  const baseURL = url.origin + url.pathname
  const finalSearchParams = mergeSearchParams(url.search, searchParams.toString())

  const finalURL = baseURL + finalSearchParams

  return (
    <a href={finalURL} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

export default ExternalLinkHOC
