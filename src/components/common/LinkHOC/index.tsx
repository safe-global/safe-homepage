import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

type LinkHOCProps = {
  href: string
  children: React.ReactNode
  passSearchParams?: boolean
}

const LinkHOC = ({ href, children }: LinkHOCProps) => {
  const { query } = useRouter()

  const url = new URL(href)
  const baseURL = `${url.origin}${url.pathname}`
  const existingSearchParams = Object.fromEntries(new URLSearchParams(url.search).entries())

  return (
    <Link
      href={{
        pathname: baseURL,
        query: { ...existingSearchParams, ...query },
      }}
      target="_blank"
      rel="noreferrer"
      passHref
    >
      {children}
    </Link>
  )
}

export default LinkHOC
