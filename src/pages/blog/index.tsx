import client from '@/lib/contentful'
import BlogHome from '@/components/Blog/BlogHome'
import type { TypeBlogHomeSkeleton, TypePostSkeleton } from '@/contentful/types'
import { isEntryTypePost } from '@/lib/typeGuards'
import type { NextPageWithLayout } from '@/pages/_app'
import type { ReactElement } from 'react'
import PageLayout from '@/components/common/PageLayout'
import type { InferGetStaticPropsType } from 'next'

const Blog: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return <BlogHome {...props} />
}

Blog.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>
}

export const getStaticProps = async () => {
  const allPosts = await client.getEntries<TypePostSkeleton>({
    content_type: 'post',
    // order by date, most recent first
    order: ['-fields.date'],
    limit: 500,
  })

  const blogHomeEntries = await client.getEntries<TypeBlogHomeSkeleton>({
    content_type: 'blogHome',
    include: 3,
  })

  const blogHome = blogHomeEntries.items[0]

  if (!blogHome || !allPosts) {
    return {
      notFound: true,
    }
  }

  // relatedPosts are not displayed on the blog home page
  if (isEntryTypePost(blogHome.fields.featured)) {
    delete blogHome.fields.featured.fields.relatedPosts
  }
  blogHome.fields.mostPopular.forEach((item: any) => delete item.fields.relatedPosts)
  allPosts.items.forEach((item: any) => delete item.fields.relatedPosts)

  return {
    props: {
      blogHome,
      allPosts,
    },
  }
}

export default Blog
