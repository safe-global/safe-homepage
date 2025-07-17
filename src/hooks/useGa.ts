import { useCookieBannerContext } from '@/contexts/CookieBannerContext'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { gtmDisableCookies, gtmEnableCookies, gtmTrackPageview } from '@/services/analytics/gtm'
import { AppRoutes } from '@/config/routes'

let isAnalyticsInitialized = false

export const useGa = () => {
  const { isAnalyticsEnabled } = useCookieBannerContext()
  const [, setPrevAnalytics] = useState(isAnalyticsEnabled)
  const router = useRouter()

  // Enable GA cookies if consent was given
  useEffect(() => {
    setPrevAnalytics((prev) => {
      if (isAnalyticsEnabled === prev) return prev

      if (isAnalyticsEnabled) {
        gtmEnableCookies()
      } else {
        gtmDisableCookies()
      }

      return isAnalyticsEnabled
    })
  }, [isAnalyticsEnabled])

  // Track page views – anonymized by default.
  useEffect(() => {
    // Don't track 404 because it's not a real page, it immediately does a client-side redirect
    if (router.pathname === AppRoutes['404']) return

    gtmTrackPageview(router.pathname, router.asPath)
  }, [router.asPath, router.pathname])
}
