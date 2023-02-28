const MetaTags = () => {
  const seo = {
    title: 'Safe',
    description: 'Safe is the most trusted platform to manage digital assets on Ethereum',
    image: '/images/og-image.png',
    color: '#12FF80',
    site: 'safe',
    url: 'https://safe.global',
  }

  return (
    <>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="theme-color" content={seo.color} />
      <meta name="application-name" content={seo.site} />
      <link rel="canonical" href={seo.url} />

      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="safe" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      <meta name="twitter:creator" content={seo.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:url" content={seo.url} />

      <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
    </>
  )
}

export default MetaTags
