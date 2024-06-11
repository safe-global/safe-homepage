import useSWR from 'swr'
import client from '@/lib/contentful'
import type { Entry, EntrySkeletonType, FixedQueryOptions } from 'contentful'

const fetcher = <T extends EntrySkeletonType>(id: string, depth: FixedQueryOptions['include'] = 3) =>
  client.getEntry<T>(id, { include: depth })

/**
 * useClientEntry is a custom hook for fetching Contentful entries.
 *
 * @template T - The type of the Contentful entry. It must extend EntrySkeletonType.
 * @template U - The type of the fallback data. It must be an instance of Entry with T as the first type parameter.
 *
 * @param {string} id - The ID of the Contentful entry to fetch.
 * @param {U} fallbackData - The fallback data to use while the Contentful entry is being fetched.
 *
 * @returns {useSWR.Response} - The response from useSWR, which includes the data and error (if any).
 */
export const useClientEntry = <T extends EntrySkeletonType, U extends Entry<T, undefined, string>>(
  id: string,
  fallbackData: U,
  depth?: FixedQueryOptions['include'],
) =>
  useSWR(id, () => fetcher<T>(id, depth), {
    fallbackData,
  })
