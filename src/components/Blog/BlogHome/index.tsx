import BlogLayout from '@/components/Blog/Layout'
import { Container, Grid, Typography } from '@mui/material'
import Card from '@/components/Blog/Card'
import FeaturedPost from '@/components/Blog/FeaturedPost'
import { type BlogPostEntry } from '@/components/Blog/Post'
import SearchFilterResults from '@/components/Blog/SearchFilterResults'
import { useEffect, useState } from 'react'
import client from '@/lib/contentful'
import type { TypePostSkeleton, TypeBlogHomeSkeleton } from '@/contentful/types'
import { type Entry } from 'contentful'
import { isEntryTypeBlogHome, isEntryTypePost } from '@/lib/typeGuards'
import { isPressReleasePost } from '@/lib/containsTag'

const categories = ['Announcements', 'Ecosystem', 'Community', 'Insights', 'Build']

const TRENDING_POSTS_COUNT = 3

type BlogHomeEntry = Entry<TypeBlogHomeSkeleton, undefined, string>

export type BlogHomeProps = {
  blogHome: BlogHomeEntry
  allPosts: BlogPostEntry[]
}

const isDraft = (post: BlogPostEntry) => post.fields.isDraft

const BlogHome = ({ blogHome, allPosts }: BlogHomeProps) => {
  const [localBlogHome, setLocalBlogHome] = useState<BlogHomeEntry>(blogHome)
  const [localAllPosts, setLocalAllPosts] = useState<BlogPostEntry[]>(allPosts)

  const { featured, metaTags, mostPopular } = localBlogHome.fields

  useEffect(() => {
    client
      .getEntry(localBlogHome.sys.id)
      .then((entry) => {
        if (isEntryTypeBlogHome(entry)) {
          setLocalBlogHome(entry)
        }
      })
      .catch(console.error)
  }, [localBlogHome.sys.id])

  // Hydrate all posts on rendering
  useEffect(() => {
    client
      .getEntries<TypePostSkeleton>({
        content_type: 'post',
        order: ['-fields.date'],
      })
      .then((entry) => {
        setLocalAllPosts(entry.items)
      })
      .catch(console.error)
  }, [])

  const visiblePosts = localAllPosts.filter((post) => !isPressReleasePost(post) && !isDraft(post))

  return (
    <BlogLayout metaTags={metaTags}>
      <Container>
        {/* Hero */}
        <Grid container mt="60px" rowGap={3}>
          <Grid item xs={12} md={7}>
            <Typography variant="h1">Blog</Typography>
          </Grid>
          <Grid item xs={12} md={5} mt="auto">
            <Typography textAlign={{ md: 'end' }}>
              Read the latest from <i>Safe</i> including new releases, use cases and community updates
            </Typography>
          </Grid>
        </Grid>

        {isEntryTypePost(featured) && <FeaturedPost {...featured} />}

        <Typography variant="h2" mt={{ xs: '60px', md: '100px' }}>
          Trending
        </Typography>
        <Grid container columnSpacing={2} rowGap="30px" mt="80px">
          {mostPopular
            .slice(0, TRENDING_POSTS_COUNT)
            .filter(isEntryTypePost)
            .map((post) => (
              <Grid key={post.fields.slug} item xs={12} md={4}>
                <Card {...post} />
              </Grid>
            ))}
        </Grid>

        {/* All posts */}
        <SearchFilterResults allPosts={visiblePosts} categories={categories} />
      </Container>
    </BlogLayout>
  )
}

export default BlogHome
