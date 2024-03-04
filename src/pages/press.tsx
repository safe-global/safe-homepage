import client from '@/lib/contentful'
import PressRoom, { type PressRoomProps } from '@/components/Pressroom'
import { type TypePressRoomSkeleton } from '@/contentful/types'

const PressroomPage = (props: PressRoomProps) => {
  return <PressRoom {...props} />
}

export const getStaticProps = async () => {
  const pressRoomEntries = await client.getEntries<TypePressRoomSkeleton>({
    content_type: 'pressRoom',
  })

  const pressRoom = pressRoomEntries.items[0]

  if (!pressRoom) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      metaTags: pressRoom.fields.metaTags,
      featuredPost: pressRoom.fields.featured,
    },
  }
}

export default PressroomPage
