import FeaturedPost from '@/components/Blog/FeaturedPost'
import { type MetaTagsEntry } from '@/components/Blog/Layout'
import { type BlogPostEntry } from '@/components/Blog/Post'
import MetaTags from '@/components/Campaign/MetaTags'
import Hero from '@/components/Pressroom/Hero'
import MediaKit from '@/components/Pressroom/MediaKit'
import { isEntryType } from '@/lib/typeGuards'
import { Container } from '@mui/material'

export type PressRoomProps = {
  metaTags: MetaTagsEntry
  featuredPost: BlogPostEntry
}

const PressRoom = (props: PressRoomProps) => {
  const { metaTags, featuredPost } = props

  return (
    <Container>
      {isEntryType(metaTags) ? <MetaTags {...metaTags} /> : undefined}
      <Hero />
      <FeaturedPost {...featuredPost} />
      <MediaKit />
    </Container>
  )
}

export default PressRoom
