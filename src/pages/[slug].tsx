import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import client from '@/lib/contentful'
import { type TypeLandingPageSkeleton } from '@/contentful/types'
import Page from '@/components/common/Page'
import { type LandingPageEntry } from '@/config/types'
import PageLayout from '@/components/common/PageLayout'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'

const LandingPage: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  if (!props.landingPage) return null

  return <Page {...props} />
}

LandingPage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>
}

export const getStaticProps: GetStaticProps<{ landingPage: LandingPageEntry }> = async ({ params }) => {
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
