import BlogPost, { type BlogPostEntry } from '@/components/Blog/Post'
import { type TypePostSkeleton } from '@/contentful/types'
import client from '@/lib/contentful'
import type { GetStaticProps } from 'next'
import jsonStringifySafe from 'json-stringify-safe'

const Page = (props: { blogPost: BlogPostEntry }) => {
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

  // replaces circular dependencies allowing safe conversion to JSON
  const blogPost = JSON.parse(jsonStringifySafe(content.items[0]))

  if (!content?.items?.length) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  return {
    props: {
      blogPost,
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
