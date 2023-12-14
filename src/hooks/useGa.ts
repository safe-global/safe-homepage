import { useCookieBannerContext } from '@/contexts/CookieBannerContext'
import { GOOGLE_ANALYTICS_DOMAIN, GOOGLE_ANALYTICS_TRACKING_ID, IS_PRODUCTION } from '@/config/constants'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'

let isAnalyticsInitialized = false

export const useGa = () => {
  const { isAnalyticsEnabled } = useCookieBannerContext()

  // Enable/disable tracking
  useEffect(() => {
    if (IS_PRODUCTION && isAnalyticsEnabled) {
      ReactGA.initialize(GOOGLE_ANALYTICS_TRACKING_ID, {
        gaOptions: {
          cookieFlags: `SameSite=Strict;Secure`,
          cookieDomain: GOOGLE_ANALYTICS_DOMAIN,
        },
      })
      isAnalyticsInitialized = true
      return
    }

    if (!isAnalyticsEnabled && isAnalyticsInitialized) {
      // Injected script will otherwise remain in memory until new session
      location.reload()
    }
  }, [isAnalyticsEnabled])
}
