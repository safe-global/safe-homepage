import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { localItem } from '@/services/Storage/local'

const ANALYTICS_PREFERENCE_KEY = 'analyticsPreference'
const analyticsPreference = localItem<boolean>(ANALYTICS_PREFERENCE_KEY)

const CookieBannerContext = createContext<{
  isBannerOpen: boolean
  openBanner: () => void
  closeBanner: () => void
  isAnalyticsEnabled: boolean
  setIsAnalyticsEnabled: (preference: boolean) => void
}>({
  isBannerOpen: false,
  openBanner: () => {},
  closeBanner: () => {},
  isAnalyticsEnabled: false,
  setIsAnalyticsEnabled: () => {},
})

export const CookieBannerContextProvider = ({ children }: { children: ReactNode }) => {
  const [isBannerOpen, setIsBannerOpen] = useState(false)
  const [isAnalyticsEnabled, setIsAnalyticsEnabled] = useState(false)

  const openBanner = useCallback(() => {
    setIsBannerOpen(true)
  }, [])

  const closeBanner = useCallback(() => {
    setIsBannerOpen(false)
  }, [])

  // Sync local state
  useEffect(() => {
    const preference = analyticsPreference.get()

    // Open cookie banner if no preference is set
    if (preference == null) {
      openBanner()
    } else {
      setIsAnalyticsEnabled(Boolean(preference))
    }
  }, [openBanner])

  const storeIsAnalyticsEnabled = useCallback((preference: boolean) => {
    analyticsPreference.set(preference)
    setIsAnalyticsEnabled(preference)
  }, [])

  return (
    <CookieBannerContext.Provider
      value={{
        isBannerOpen,
        openBanner,
        closeBanner,
        isAnalyticsEnabled,
        setIsAnalyticsEnabled: storeIsAnalyticsEnabled,
      }}
    >
      {children}
    </CookieBannerContext.Provider>
  )
}

export const useCookieBannerContext = () => {
  const cookieContext = useContext(CookieBannerContext)

  if (!cookieContext) {
    throw new Error('useCookieBannerContext must be used within a CookieBannerContextProvider')
  }

  return cookieContext
}
