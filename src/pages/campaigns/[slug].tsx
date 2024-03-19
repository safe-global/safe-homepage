import type { GetStaticPaths, GetStaticProps } from 'next'
import { client } from '@/lib/contentful'
import Campaign, { type CampaignPageEntry } from '@/components/Campaigns/Campaign'
import type { TypePageSkeleton } from '@/contentful/types'

const CampaignsPage = (props: { campaignPage: CampaignPageEntry }) => {
  if (!props.campaignPage) return null

  return <Campaign {...props} />
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string

  const content = await client.getEntries<TypePageSkeleton>({
    content_type: 'page',
    'fields.slug': slug,
    include: 3,
  })

  const campaignPage = content.items[0]

  if (!campaignPage) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  return {
    props: {
      campaignPage,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await client.getEntries<TypePageSkeleton>({ content_type: 'page' })
  const paths = response.items.map((item) => ({
    params: { slug: item.fields.slug },
  }))

  return {
    paths,
    fallback: true,
  }
}

export default CampaignsPage
