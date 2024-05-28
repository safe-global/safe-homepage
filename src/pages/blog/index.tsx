import client from '@/lib/contentful'
import BlogHome, { type BlogHomeProps } from '@/components/Blog/BlogHome'
import type { TypeBlogHomeSkeleton, TypePostSkeleton } from '@/contentful/types'
import { isEntryTypePost } from '@/lib/typeGuards'

const Blog = (props: BlogHomeProps) => {
  return <BlogHome {...props} />
}

export const getStaticProps = async () => {
  const postsEntries = await client.getEntries<TypePostSkeleton>({
    content_type: 'post',
    // order by date, most recent first
    order: ['-fields.date'],
  })

  const blogHomeEntries = await client.getEntries<TypeBlogHomeSkeleton>({
    content_type: 'blogHome',
    include: 3,
  })

  const blogHome = blogHomeEntries.items[0]

  if (!blogHome || !postsEntries) {
    return {
      notFound: true,
    }
  }

  // relatedPosts are not displayed on the blog home page
  if (isEntryTypePost(blogHome.fields.featured)) {
    delete blogHome.fields.featured.fields.relatedPosts
  }
  blogHome.fields.mostPopular.forEach((item: any) => delete item.fields.relatedPosts)
  postsEntries.items.forEach((item: any) => delete item.fields.relatedPosts)

  return {
    props: {
      blogHome,
      allPosts: postsEntries.items,
    },
  }
}

export default Blog
