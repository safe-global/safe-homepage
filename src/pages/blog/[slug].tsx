import BlogPost, { type BlogPostEntry } from '@/components/Blog/Post'
import { type TypePostSkeleton } from '@/contentful/types'
import client from '@/lib/contentful'
import type { GetStaticProps } from 'next'
// import { SeoFields } from '@src/components/features/seo'

const Page = (props: { blogPost: BlogPostEntry }) => {
  console.log('Page props', props)

  if (!props.blogPost) return null

  return <BlogPost {...props} />
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string

  const content = await client.getEntries<TypePostSkeleton>({
    content_type: 'post',
    'fields.slug': slug,
    include: 3,
  })

  if (!content?.items?.length) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  const blogPost = content.items[0]

  // TODO: rethink how to reference the related posts to avoid circular dependencies
  // const { relatedPosts } = blogPost.fields
  // delete blogPost.fields.relatedPosts
  // relatedPosts?.forEach((post: any) => delete post.fields.relatedPosts)

  return {
    props: {
      blogPost,
      // relatedPosts,
    },
  }
}

export const getStaticPaths = async () => {
  const response = await client.getEntries<TypePostSkeleton>({ content_type: 'post' })
  const paths = response.items.map((item) => ({
    params: { slug: item.fields.slug },
  }))

  return {
    paths,
    fallback: true,
  }
}

export default Page
