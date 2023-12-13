import { useEffect } from 'react'
import { useCookieBannerContext } from '@/contexts/CookieBannerContext'
import { HOTJAR_ID, HOTJAR_ID_STAGING, HOTJAR_VERSION, IS_PRODUCTION } from '@/config/constants'

let scriptRef: HTMLScriptElement | null = null

const ID = IS_PRODUCTION ? HOTJAR_ID : HOTJAR_ID_STAGING

const useHotjar = () => {
  const { isAnalyticsEnabled } = useCookieBannerContext()

  // Add/remove hotjar script
  useEffect(() => {
    if (isAnalyticsEnabled) {
      scriptRef = document.createElement('script')
      scriptRef.innerText = `(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:${ID},hjsv:${HOTJAR_VERSION}};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
      document.head.appendChild(scriptRef)
      return
    }

    if (!isAnalyticsEnabled && scriptRef) {
      scriptRef.remove()
      scriptRef = null
    }
  }, [isAnalyticsEnabled])
}

export default useHotjar
