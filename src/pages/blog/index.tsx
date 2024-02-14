import client from '@/lib/contentful'
import BlogHome, { type BlogHomeProps } from '@/components/Blog/BlogHome'
import type { TypeBlogHomeSkeleton, TypePostSkeleton } from '@/contentful/types'

const Blog = (props: BlogHomeProps) => {
  return <BlogHome {...props} />
}

export const getStaticProps = async () => {
  const postsEntries = await client.getEntries<TypePostSkeleton>({
    content_type: 'post',
  })

  const blogHomeEntries = await client.getEntries<TypeBlogHomeSkeleton>({
    content_type: 'blogHome',
  })

  const blogHome = blogHomeEntries.items[0]

  if (!blogHome || !postsEntries) {
    return {
      notFound: true,
    }
  }

  // remove relatedPosts from the Post responses to avoid circular dependencies
  blogHome.fields.mostPopular.forEach((item: any) => delete item.fields.relatedPosts)
  postsEntries.items.forEach((item: any) => delete item.fields.relatedPosts)

  return {
    props: {
      metaTags: blogHome.fields.metaTags,
      featuredPost: blogHome.fields.featured,
      mostPopular: blogHome.fields.mostPopular,
      allPosts: postsEntries.items,
    },
  }
}

export default Blog
