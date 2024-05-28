import useSWR from 'swr'
import client from '@/lib/contentful'
import { type BlogPostEntry } from '@/components/Blog/Post'
import { type TypePostSkeleton } from '@/contentful/types'

const postFetcher = (id: string) => client.getEntry<TypePostSkeleton>(id)

export const useBlogPost = (id: string, initialData: BlogPostEntry): { post: BlogPostEntry } => {
  const { data: post, error } = useSWR(id, postFetcher, { fallbackData: initialData })

  if (error) {
    console.error(error.message)
  }

  return { post }
}
