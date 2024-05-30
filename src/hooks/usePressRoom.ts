import useSWR from 'swr'
import client from '@/lib/contentful'
import type { TypePressRoomSkeleton } from '@/contentful/types'
import type { PressRoomEntry } from '@/components/Pressroom'

const pressRoomFetcher = (id: string) => client.getEntry<TypePressRoomSkeleton>(id)

export const usePressRoom = (id: string, fallbackData: PressRoomEntry) => useSWR(id, pressRoomFetcher, { fallbackData })
