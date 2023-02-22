import { useRouter } from 'next/router'
import { useEffect } from 'react'
import ReactGA from 'react-ga'

let isAnalyticsInitialized = false

export const useGa = (isAnalyticsEnabled: boolean) => {
  const { asPath } = useRouter()

  // Enable/disable tracking
  useEffect(() => {
    if (isAnalyticsEnabled) {
      // TODO: Add GA tracking ID ready to deploy
      ReactGA.initialize('')
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
