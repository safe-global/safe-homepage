import BlogPost, { type BlogPostEntry } from '@/components/Blog/Post'
import { type TypePostSkeleton } from '@/contentful/types'
import { client, previewClient } from '@/lib/contentful'
import type { GetStaticProps } from 'next'
import Link from 'next/link'

const Page = ({ blogPost, draftMode }: { blogPost: BlogPostEntry; draftMode: boolean }) => {
  if (!blogPost) return null

  return (
    <>
      {draftMode && <Link href="/api/blog/disable-draft">Click here</Link>}
      <BlogPost blogPost={blogPost} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params, draftMode } = context
  console.log('#2 - Blog post getStaticProps', draftMode)
  const slug = params?.slug as string
  const cfClient = draftMode ? previewClient : client

  const content = await cfClient.getEntries<TypePostSkeleton>({
    content_type: 'post',
    'fields.slug': slug,
  })

  const blogPost = content.items[0]

  if (!blogPost) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  // keep one level of relatedPosts to avoid circular references
  blogPost.fields.relatedPosts?.forEach((post: any) => delete post.fields.relatedPosts)

  return {
    props: {
      blogPost,
      draftMode,
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
