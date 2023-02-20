import useSWR from 'swr'

const BREEZY_API_URL = 'https://safe-global.breezy.hr/json'
export const SWR_KEY = 'open-positions'

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

export const fetchOpenPositions = async (): Promise<Position[]> => {
  return fetch(BREEZY_API_URL).then((res) => res.json())
}

export const useOpenPositions = () => {
  return useSWR<Position[]>(SWR_KEY, fetchOpenPositions)
}
