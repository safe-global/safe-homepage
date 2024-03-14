import FeaturedPost from '@/components/Blog/FeaturedPost'
import MetaTags from '@/components/Campaigns/MetaTags'
import FeaturedVideos from '@/components/Pressroom/FeaturedVideos'
import Founders from '@/components/Pressroom/Founders'
import Hero from '@/components/Pressroom/Hero'
import Investors from '@/components/Pressroom/Investors'
import MediaKit from '@/components/Pressroom/MediaKit'
import News from '@/components/Pressroom/News'
import Podcasts from '@/components/Pressroom/Podcasts'
import { type TypePressRoomSkeleton } from '@/contentful/types'
import { isAsset, isEntryType, isEntryTypeExternalURL, isEntryTypePost } from '@/lib/typeGuards'
import { Container } from '@mui/material'
import { type Entry } from 'contentful'

export type PressRoomEntry = Entry<TypePressRoomSkeleton, undefined, string>

const PressRoom = ({ pressRoom }: { pressRoom: PressRoomEntry }) => {
  const { metaTags, featured, investors, news, podcasts, videos } = pressRoom.fields

  const investorsList = investors.filter(isAsset)
  const newsList = news.filter(isEntryTypeExternalURL)
  const podcastsList = podcasts.filter(isEntryTypeExternalURL)
  const videosList = videos.filter(isEntryTypeExternalURL)

  return (
    <>
      {isEntryType(metaTags) && <MetaTags {...metaTags} />}
      <Container>
        <Hero />
        {isEntryTypePost(featured) && <FeaturedPost {...featured} />}
        <Founders />
        <Investors investors={investorsList} />
        <News news={newsList} />
        <Podcasts podcasts={podcastsList} />
        <FeaturedVideos videos={videosList} />
        <MediaKit />
      </Container>
    </>
  )
}

export default PressRoom
