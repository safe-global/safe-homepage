import { useRouter } from 'next/router'
import type { ParsedUrlQuery } from 'querystring'

type LinkHOCProps = {
  href: string
  children: React.ReactNode
}

// Utility function to construct the final URL
const buildURL = (href: string, query: ParsedUrlQuery) => {
  const url = new URL(href)
  const baseURL = `${url.origin}${url.pathname}`

  // Create a new URLSearchParams object
  const searchParams = new URLSearchParams(url.search)

  // Append query parameters from useRouter
  Object.entries(query).forEach(([key, value]) => {
    searchParams.append(key, value as string)
  })

  return `${baseURL}${searchParams.toString() && `?${searchParams.toString()}`}`
}

const LinkHOC = ({ href, children }: LinkHOCProps) => {
  const { query } = useRouter()
  const finalURL = buildURL(href, query)

  return (
    <a href={finalURL} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

export default LinkHOC
