import useSWR from 'swr'
import { type BlogPostEntry } from '@/components/Blog/Post'
import { type TypePostSkeleton } from '@/contentful/types'
import client from '@/lib/contentful'

const allPostsFetcher = () =>
  client
    .getEntries<TypePostSkeleton>({
      content_type: 'post',
      order: ['-fields.date'],
    })
    .then((entry) => entry.items)

export const useAllPosts = (initialData: BlogPostEntry[]) => {
  const { data: allPosts, error } = useSWR('/blog', allPostsFetcher, {
    fallbackData: initialData,
  })

  return { allPosts, error }
}
