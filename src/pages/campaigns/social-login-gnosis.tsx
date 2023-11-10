import type { InferGetStaticPropsType, NextPage } from 'next'
import client from '@/lib/contentful'
import type { TypeContentOrderSkeleton } from '@/contentful/types'
import SocialLogin from '@/components/Campaign/SocialLogin'

const Campaigns: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return <SocialLogin {...props} />
}

export const getStaticProps = async () => {
  const contentOrder = await client.getEntries<TypeContentOrderSkeleton>({ content_type: 'contentOrder' })

  const content = [...contentOrder.items[0].fields.componentName]

  const fetchedEntries = await Promise.all(
    content.map(async (content_type) => await client.getEntries({ content_type })),
  )

  return {
    props: {
      content,
      fetchedEntries,
    },
  }
}

export default Campaigns
