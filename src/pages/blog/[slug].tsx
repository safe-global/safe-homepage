import BlogPost from '@/components/Blog/Post'
import client from '@/lib/contentfulLocal'
// import { useContentfulLiveUpdates } from '@contentful/live-preview/react'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
// import { SeoFields } from '@src/components/features/seo'
// import { client, previewClient } from '@src/lib/client'

const revalidateDuration = 60

const Page = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log('Page props', props)
  // const blogPost = useContentfulLiveUpdates(props.blogPost)

  // if (!blogPost || !relatedPosts) return null
  if (!props.blogPost) return null

  return <BlogPost {...props} />
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string

  const content = await client.getEntries({
    content_type: 'post',
    'fields.slug': slug,
    include: 3,
  })

  const blogPost = content.items[0]

  if (!blogPost) {
    return {
      notFound: true,
      // revalidate: revalidateDuration,
    }
  }

  // TODO: rethink how to reference the related posts to avoid circular dependencies
  const { relatedPosts } = blogPost.fields
  delete blogPost.fields.relatedPosts
  relatedPosts?.forEach((post: any) => delete post.fields.relatedPosts)

  return {
    props: {
      // previewActive: !!preview,
      blogPost,
      relatedPosts,
    },
    revalidate: revalidateDuration,
  }
}

export const getStaticPaths = async () => {
  const response = await client.getEntries({ content_type: 'post' })
  const paths = response.items.map((item) => ({
    params: { slug: item.fields.slug },
  }))

  return {
    paths,
    fallback: true,
  }
}

export default Page
