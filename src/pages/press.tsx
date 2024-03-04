import client from '@/lib/contentful'
import PressRoom, { type PressRoomEntry } from '@/components/Pressroom'
import { type TypePressRoomSkeleton } from '@/contentful/types'

const PressroomPage = (props: { pressRoom: PressRoomEntry }) => {
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
      pressRoom,
    },
  }
}

export default PressroomPage
