import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import client from '@/lib/contentful'
import SocialLogin from '@/components/Campaign/SocialLogin'
import type { TypePageSkeleton } from '@/contentful/types'

const Campaigns: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ content }) => {
  return <SocialLogin {...content.fields} />
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string

  const content = await client.getEntries<TypePageSkeleton>({
    content_type: 'page',
    'fields.slug': slug,
    include: 3,
  })

  if (!content?.items?.length) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  return {
    props: {
      content: content.items[0],
    },
  }
}

export const getStaticPaths = async () => {
  const response = await client.getEntries<TypePageSkeleton>({ content_type: 'page' })
  const paths = response.items.map((item) => ({
    params: { slug: item.fields.slug },
  }))

  return {
    paths,
    fallback: true,
  }
}

export default Campaigns
