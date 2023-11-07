import type { InferGetStaticPropsType, NextPage } from 'next'
import client from '@/lib/contentful'
import type { TypeContentOrderSkeleton } from '@/contentful/types'
import { capitalizeFirstLetter } from '@/lib/capitalizeFirstLetter'
import getComponentByName from '@/lib/getComponentByName'

const NotFoundComponent = () => <div>Component not found</div>

const Campaigns: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ content, fetchedEntries }) => {
  return (
    <div>
      {fetchedEntries.map((entry, index) => {
        const campaignComponentName = `Campaign/${capitalizeFirstLetter(content[index])}`

        const Component = getComponentByName(campaignComponentName, NotFoundComponent)

        return <Component {...entry.items[0]} key={content[index]} />
      })}
    </div>
  )
}

export const getStaticProps = async () => {
  const contentOrder = await client.getEntries<TypeContentOrderSkeleton>({ content_type: 'contentOrder' })

  let content = [...contentOrder.items[0].fields.componentName]

  const fetchedEntries = await Promise.all(
    content.map(async (content_type) => await client.getEntries({ content_type })),
  )

  return {
    props: {
      content: content,
      fetchedEntries: fetchedEntries,
    },
  }
}

export default Campaigns
