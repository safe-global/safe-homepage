import FeaturedPost from '@/components/Blog/FeaturedPost'
import MetaTags from '@/components/common/MetaTagsContentful'
import AboutUs from '@/components/Pressroom/AboutUs'
import ContentsNavigation from '@/components/Pressroom/ContentsNavigation'
import FeaturedVideos from '@/components/Pressroom/FeaturedVideos'
import Founders from '@/components/Pressroom/Founders'
import Hero from '@/components/Pressroom/Hero'
import Investors from '@/components/Pressroom/Investors'
import MediaKit from '@/components/Pressroom/MediaKit'
import News from '@/components/Pressroom/News'
import Podcasts from '@/components/Pressroom/Podcasts'
import PressReleases from '@/components/Pressroom/PressReleases'
import Marquee from '@/components/common/Marquee'
import Timeline from '@/components/Pressroom/Timeline'
import type { TypePressRoomSkeleton } from '@/contentful/types'
import {
  isAsset,
  isEntryType,
  isEntryTypeBaseBlock,
  isEntryTypeExternalURL,
  isEntryTypePost,
  isEntryTypeSimpleBaseBlock,
} from '@/lib/typeGuards'
import { Container } from '@mui/material'
import type { Entry } from 'contentful'
import { useLandingPageContent } from '@/hooks/useLandingPageContent'
import type { PostEntryCollection } from '@/config/types'

export type PressRoomEntry = Entry<TypePressRoomSkeleton, undefined, string>

export type PressRoomProps = {
  pressRoom: PressRoomEntry
  allPosts: PostEntryCollection
  totalAssets: number
}

const PressRoom = ({ pressRoom, allPosts, totalAssets }: PressRoomProps) => {
  const { data: localPressRoom } = useLandingPageContent<TypePressRoomSkeleton, PressRoomEntry>(
    pressRoom.sys.id,
    pressRoom,
  )

  const { metaTags, featured, numbers, investors, timeline, news, podcasts, videos } = localPressRoom.fields

  const numbersList = numbers.filter(isEntryTypeBaseBlock)
  const investorsList = investors.filter(isAsset)
  const timelineList = timeline.filter(isEntryTypeSimpleBaseBlock)
  const newsList = news.filter(isEntryTypeExternalURL)
  const podcastsList = podcasts.filter(isEntryTypeExternalURL)
  const videosList = videos.filter(isEntryTypeExternalURL)

  return (
    <>
      {isEntryType(metaTags) && <MetaTags {...metaTags} />}
      <Container>
        <Hero />
        {isEntryTypePost(featured) && <FeaturedPost {...featured} />}
        <ContentsNavigation />
        <AboutUs totalAssets={totalAssets} />
        <Marquee items={numbersList} />
        <Founders />
        <Investors investors={investorsList} />
        <Timeline items={timelineList} />
        <PressReleases allPosts={allPosts} />
        <News news={newsList} />
        <Podcasts podcasts={podcastsList} />
        <FeaturedVideos videos={videosList} />
        <MediaKit />
      </Container>
    </>
  )
}

export default PressRoom
