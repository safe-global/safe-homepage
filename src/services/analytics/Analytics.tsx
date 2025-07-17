import { IS_PRODUCTION, GOOGLE_ANALYTICS_TRACKING_ID } from '@/config/constants'
import { GoogleAnalytics } from '@next/third-parties/google'
import { useEffect } from 'react'

const Analytics = () => {
  useEffect(() => {
    window.gtag?.('consent', 'default', {
      ad_storage: 'denied',
      analytics_storage: 'denied',
      functionality_storage: 'granted',
      personalization_storage: 'denied',
      security_storage: 'granted',
      wait_for_update: 500,
    })
  }, [])

  return <GoogleAnalytics gaId={GOOGLE_ANALYTICS_TRACKING_ID} debugMode={!IS_PRODUCTION} />
}

export default Analytics
