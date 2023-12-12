import { mergeSearchParams } from '@/lib/mergeSearchParams'
import { useRouter } from 'next/router'

type ExternalLinkHOCProps = {
  href: string
  children: React.ReactNode
}

const ExternalLinkHOC = ({ href, children }: ExternalLinkHOCProps) => {
  const { query } = useRouter()

  const url = new URL(href)
  const baseURL = url.origin + url.pathname
  const searchParams = mergeSearchParams(url.search, query)

  const finalURL = baseURL + searchParams

  return (
    <a href={finalURL} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

export default ExternalLinkHOC
