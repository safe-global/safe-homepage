import { sessionItem } from '@/services/Storage/session'
import { useSearchParams } from 'next/navigation'
import { type ReactNode, createContext, useEffect, useState } from 'react'

const SEARCH_PARAMS_KEY = 'searchParams'
const sessionSearchParams = sessionItem<string>(SEARCH_PARAMS_KEY)

const SearchParamsContext = createContext<any>(undefined)

export const SearchParamsContextProvider = ({ children }: { children: ReactNode }) => {
  const searchParams = useSearchParams()
  const [searchParamsValue, setSearchParamsValue] = useState<string>()

  useEffect(() => {
    const initialSearchParams = sessionSearchParams.get() || ''
    const finalUtmParams = new URLSearchParams(initialSearchParams)

    // merge search params
    for (const [key, value] of Array.from(searchParams.entries())) {
      finalUtmParams.set(key, value)
    }

    setSearchParamsValue(finalUtmParams.toString())
    sessionSearchParams.set(finalUtmParams.toString())
  }, [searchParams])

  return <SearchParamsContext.Provider value={searchParamsValue}>{children}</SearchParamsContext.Provider>
}

export default SearchParamsContext
