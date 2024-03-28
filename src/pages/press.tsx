import client from '@/lib/contentful'
import PressRoom, { type PressRoomProps } from '@/components/Pressroom'
import type { TypePressRoomSkeleton, TypePostSkeleton } from '@/contentful/types'

const PressroomPage = (props: PressRoomProps) => {
  return <PressRoom {...props} />
}

export const getStaticProps = async () => {
  const postsEntries = await client.getEntries<TypePostSkeleton>({
    content_type: 'post',
    // order by date, most recent first
    order: ['-fields.date'],
  })

  const pressRoomEntries = await client.getEntries<TypePressRoomSkeleton>({
    content_type: 'pressRoom',
    include: 3,
  })

  const pressRoom = pressRoomEntries.items[0]

  if (!pressRoom || !postsEntries) {
    return {
      notFound: true,
    }
  }

  postsEntries.items.forEach((item: any) => delete item.fields.relatedPosts)

  return {
    props: {
      pressRoom,
      allPosts: postsEntries.items,
    },
  }
}

export default PressroomPage
