import useSWR from 'swr'
import client from '@/lib/contentful'
import type { BlogPostEntry } from '@/config/types'
import { type TypePostSkeleton } from '@/contentful/types'

const postFetcher = (id: string) => client.getEntry<TypePostSkeleton>(id)

export const useBlogPost = (id: string, fallbackData: BlogPostEntry) => useSWR(id, postFetcher, { fallbackData })
