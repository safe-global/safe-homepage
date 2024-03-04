import FeaturedPost from '@/components/Blog/FeaturedPost'
import MetaTags from '@/components/Campaign/MetaTags'
import FeaturedVideos from '@/components/Pressroom/FeaturedVideos'
import Hero from '@/components/Pressroom/Hero'
import MediaKit from '@/components/Pressroom/MediaKit'
import { type TypePressRoomSkeleton } from '@/contentful/types'
import { isEntryType, isEntryTypeExternalURL, isEntryTypePost } from '@/lib/typeGuards'
import { Container } from '@mui/material'
import { type Entry } from 'contentful'

export type PressRoomEntry = Entry<TypePressRoomSkeleton, undefined, string>

const PressRoom = ({ pressRoom }: { pressRoom: PressRoomEntry }) => {
  const { metaTags, featured, videos } = pressRoom.fields

  const videosList = videos.filter(isEntryTypeExternalURL)

  return (
    <>
      {isEntryType(metaTags) && <MetaTags {...metaTags} />}
      <Container>
        <Hero />
        {isEntryTypePost(featured) && <FeaturedPost {...featured} />}
        <FeaturedVideos videos={videosList} />
        <MediaKit />
      </Container>
    </>
  )
}

export default PressRoom
