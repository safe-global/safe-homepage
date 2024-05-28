import useSWR from 'swr'
import client from '@/lib/contentful'
import { type BlogHomeEntry } from '@/components/Blog/BlogHome'
import { type TypeBlogHomeSkeleton } from '@/contentful/types'

const blogHomeFetcher = (id: string) => client.getEntry<TypeBlogHomeSkeleton>(id)

export const useBlogHome = (id: string, initialData: BlogHomeEntry): { blogHome: BlogHomeEntry } => {
  const { data: blogHome, error } = useSWR(id, blogHomeFetcher, {
    fallbackData: initialData,
  })

  if (error) {
    console.error(error.message)
  }

  return { blogHome }
}
