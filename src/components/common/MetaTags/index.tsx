import { IS_PRODUCTION } from '@/config/constants'
import { ContentSecurityPolicy } from '@/config/securityHeaders'
import Head from 'next/head'

const defaultMetaTags = {
  pageTitle: 'Safe',
  description: 'Safe is the most trusted platform to manage digital assets on Ethereum',
  image: 'https://safe.global/images/og-image.png',
  site: 'Safe',
}

const MetaTags = (props: Partial<typeof defaultMetaTags>) => {
  const seo = { ...defaultMetaTags, ...props }

  return (
    <Head>
      <title>{seo.pageTitle}</title>

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="application-name" content={seo.site} />

      <meta property="og:title" content={seo.pageTitle} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      <meta name="twitter:creator" content={seo.pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.pageTitle} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {!IS_PRODUCTION && <meta name="robots" content="noindex" />}

      {/* CSP */}
      <meta httpEquiv="Content-Security-Policy" content={ContentSecurityPolicy} />

      {/* Mobile tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="safe" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Favicons */}
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
    </Head>
  )
}

export default MetaTags
