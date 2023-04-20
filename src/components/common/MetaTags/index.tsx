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
    </Head>
  )
}

export default MetaTags
