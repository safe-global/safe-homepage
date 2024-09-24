import client from '@/lib/contentful'
import PressRoom, { type PressRoomProps } from '@/components/Pressroom'
import type { TypePressRoomSkeleton, TypePostSkeleton } from '@/contentful/types'
import { fetchTotalAssets } from '@/hooks/useSafeStats'

const PressroomPage = (props: PressRoomProps) => {
  return <PressRoom {...props} />
}

export const getStaticProps = async () => {
  const allPosts = await client.getEntries<TypePostSkeleton>({
    content_type: 'post',
    // order by date, most recent first
    order: ['-fields.date'],
    limit: 150,
  })

  const pressRoomEntries = await client.getEntries<TypePressRoomSkeleton>({
    content_type: 'pressRoom',
    include: 3,
  })

  const totalAssets = await fetchTotalAssets()

  const pressRoom = pressRoomEntries.items[0]

  if (!pressRoom || !allPosts) {
    return {
      notFound: true,
    }
  }

  allPosts.items.forEach((item: any) => delete item.fields.relatedPosts)

  return {
    props: {
      pressRoom,
      allPosts,
      totalAssets,
    },
  }
}

export default PressroomPage
