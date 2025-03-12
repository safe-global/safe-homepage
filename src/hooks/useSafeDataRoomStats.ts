import { useContext } from 'react'
import SafeDataRoomContext from '@/contexts/SafeDataRoomContext'

export const useSafeDataRoomStats = (): Record<string, number | null> => {
  return useContext(SafeDataRoomContext)
}
