import type { GetStaticPaths, GetStaticProps } from 'next'
import client from '@/lib/contentful'
import { type TypeLandingPageSkeleton } from '@/contentful/types'
import Page, { type LandingPageEntry } from '@/components/common/Page'

const LandingPage = (props: { landingPage: LandingPageEntry }) => {
  if (!props.landingPage) return null

  return <Page {...props} />
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string

  const landingPageEntries = await client.getEntries<TypeLandingPageSkeleton>({
    content_type: 'landingPage',
    'fields.slug': slug,
    include: 3,
  })

  const landingPage = landingPageEntries.items[0]

  if (!landingPage) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      landingPage,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await client.getEntries<TypeLandingPageSkeleton>({ content_type: 'landingPage' })
  const paths = response.items.map((item) => ({
    params: { slug: item.fields.slug },
  }))

  return {
    paths,
    fallback: true,
  }
}

export default LandingPage
