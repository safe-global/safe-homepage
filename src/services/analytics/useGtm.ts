import { useEffect } from 'react'

import useLocalStorage from '@/services/Storage/useLocalStorage'
import { gtmClear, gtmInit } from '@/services/analytics/gtm'
import { COOKIES_KEY, CookieType } from '@/components/common/CookieBanner'
import type { CookiePreferences } from '@/components/common/CookieBanner'

export const useGtm = (): void => {
  const [cookies] = useLocalStorage<CookiePreferences>(COOKIES_KEY)
  const isAnalyticsEnabled = !!cookies?.[CookieType.ANALYTICS]

  useEffect(() => {
    if (isAnalyticsEnabled) {
      gtmInit()
    } else {
      gtmClear()
    }
  }, [isAnalyticsEnabled])
}
