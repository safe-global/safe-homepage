import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'
import BlogPost from '@/components/Blog/Post'
import PageLayout from '@/components/common/PageLayout'
import { type TypePostSkeleton } from '@/contentful/types'
import client from '@/lib/contentful'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

const Page: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  if (!props.blogPost) return null

  return <BlogPost {...props} />
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string

  const content = await client.getEntries<TypePostSkeleton>({
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
    },
  }
}

export const getStaticPaths = async () => {
  const response = await client.getEntries<TypePostSkeleton>({ content_type: 'post', limit: 500 })
  const paths = response.items.map((item) => ({
    params: { slug: item.fields.slug },
  }))

  return {
    paths,
    fallback: true,
  }
}

export default Page
