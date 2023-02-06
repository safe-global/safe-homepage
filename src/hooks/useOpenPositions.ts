import { useEffect, useState } from 'react'

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

export const useOpenPositions = (): Position[] => {
  const [positions, setPositions] = useState<Position[]>([])

  useEffect(() => {
    let isCurrent = true

    const getOpenPositions = async () => {
      try {
        const data = await fetch(BREEZY_API_URL)
        const jobs: Position[] = await data.json()

        if (isCurrent) {
          setPositions(jobs)
        }
      } catch (e) {
        console.error(e)
      }
    }

    getOpenPositions()

    return () => {
      isCurrent = false
    }
  }, [])

  return positions
}
