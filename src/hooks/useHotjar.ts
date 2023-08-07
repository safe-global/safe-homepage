import { useEffect } from 'react'
import { useCookieBannerContext } from '@/components/common/CookieBanner/CookieBannerContext'
import { HOTJAR_ID, HOTJAR_VERSION, IS_PRODUCTION } from '@/config/constants'

let scriptRef: HTMLScriptElement | null = null

const useHotjar = () => {
  const { isAnalyticsEnabled } = useCookieBannerContext()

  // Add/remove hotjar script
  useEffect(() => {
    if (IS_PRODUCTION && isAnalyticsEnabled) {
      scriptRef = document.createElement('script')
      scriptRef.src = `https://static.hotjar.com/c/hotjar-${HOTJAR_ID}.js?sv=${HOTJAR_VERSION}`
      scriptRef.async = true
      scriptRef.defer = true
      document.body.appendChild(scriptRef)
      return
    }

    if (!isAnalyticsEnabled && scriptRef) {
      scriptRef.remove()
      scriptRef = null
    }
  }, [isAnalyticsEnabled])
}

export default useHotjar
