import FeaturedPost from '@/components/Blog/FeaturedPost'
import { type BlogPostEntry } from '@/components/Blog/Post'
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
import SafeInNumbers from '@/components/Pressroom/SafeInNumbers'
import Timeline from '@/components/Pressroom/Timeline'
import { type TypePressRoomSkeleton } from '@/contentful/types'
import { containsTag, PRESS_RELEASE_TAG } from '@/lib/containsTag'
import { isAsset, isEntryType, isEntryTypeExternalURL, isEntryTypePost } from '@/lib/typeGuards'
import { Container } from '@mui/material'
import { type Entry } from 'contentful'

export type PressRoomEntry = Entry<TypePressRoomSkeleton, undefined, string>

export type PressRoomProps = {
  pressRoom: PressRoomEntry
  allPosts: BlogPostEntry[]
  totalAssets: number
}

const PressRoom = ({ pressRoom, allPosts, totalAssets }: PressRoomProps) => {
  const { metaTags, featured, investors, news, podcasts, videos } = pressRoom.fields

  const investorsList = investors.filter(isAsset)
  const newsList = news.filter(isEntryTypeExternalURL)
  const podcastsList = podcasts.filter(isEntryTypeExternalURL)
  const videosList = videos.filter(isEntryTypeExternalURL)
  const pressPosts = allPosts.filter((post) => containsTag(post.fields.tags, PRESS_RELEASE_TAG))

  return (
    <>
      {isEntryType(metaTags) && <MetaTags {...metaTags} />}
      <Container>
        <Hero />
        {isEntryTypePost(featured) && <FeaturedPost {...featured} />}
        <ContentsNavigation />
        <AboutUs totalAssets={totalAssets} />
        <SafeInNumbers />
        <Founders />
        <Investors investors={investorsList} />
        <Timeline />
        <News news={newsList} />
        <Podcasts podcasts={podcastsList} />
        <FeaturedVideos videos={videosList} />
        <PressReleases allPosts={pressPosts} />
        <MediaKit />
      </Container>
    </>
  )
}

export default PressRoom
