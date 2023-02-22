import { useCookieBannerContext } from '@/components/common/CookieBanner/CookieBannerContext'
import { GOOGLE_ANALYTICS_TRACKING_ID } from '@/config/constants'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import ReactGA from 'react-ga'

let isAnalyticsInitialized = false

export const useGa = () => {
  const { asPath } = useRouter()
  const { isAnalyticsEnabled } = useCookieBannerContext()

  // Enable/disable tracking
  useEffect(() => {
    if (isAnalyticsEnabled) {
      ReactGA.initialize(GOOGLE_ANALYTICS_TRACKING_ID)
      isAnalyticsInitialized = true
      return
    }

    if (!isAnalyticsEnabled && isAnalyticsInitialized) {
      // Injected script will otherwise remain in memory until new session
      location.reload()
    }
  }, [isAnalyticsEnabled])

  // Track pageviews
  useEffect(() => {
    if (isAnalyticsInitialized) {
      ReactGA.pageview(asPath)
    }
  }, [asPath])
}
