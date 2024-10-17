import type { ReactElement } from 'react'
import PageContent from '@/components/common/PageContent'
import alphaContent from '@/content/alpha.json'
import Head from 'next/head'

export const Alpha = (): ReactElement => {
  return (
    <>
      <PageContent content={alphaContent} path="alpha.json" />
      <Head>
        <meta name="robots" content="noindex" />
        {/* Overwrite website favicons */}
        <link rel="shortcut icon" href="/images/Alpha/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/Alpha/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/Alpha/favicons/favicon-16x16.png" />
      </Head>
    </>
  )
}
