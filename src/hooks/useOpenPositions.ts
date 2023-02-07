import useAsync from '@/hooks/useAsync'
import type { AsyncResult } from '@/hooks/useAsync'

const BREEZY_API_URL = 'https://safe-global.breezy.hr/json'

export type Position = {
  id: string
  friendly_id: string
  name: string
  url: string
  published_date: string
  type: {
    id: string
    name: string
  }
  location: {
    country: {
      name: string
      id: string
    }
    city: string
    is_remote: boolean
    name: string
  }
  department: string
  company: {
    name: string
    logo_url: string | null
    friendly_id: string
  }
}

export const useOpenPositions = (): AsyncResult<Position[]> => {
  return useAsync<Position[]>(() => {
    return fetch(BREEZY_API_URL).then((res) => {
      return res.json()
    })
  }, [])
}
