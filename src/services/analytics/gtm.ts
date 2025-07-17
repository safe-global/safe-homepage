/**
 * Google Tag Manager-related functions.
 *
 * Initializes and un-initializes GTM in production or dev mode.
 * Allows sending datalayer events to GTM.
 *
 * This service should NOT be used directly by components. Use the `analytics` service instead.
 */

import { sendGAEvent } from '@next/third-parties/google'
import Cookies from 'js-cookie'
import { GOOGLE_ANALYTICS_TRACKING_ID, IS_PRODUCTION } from '@/config/constants'

export const gtmEnableCookies = () => {
  window.gtag?.('consent', 'update', {
    analytics_storage: 'granted',
  })
}

export const gtmDisableCookies = () => {
  window.gtag?.('consent', 'update', {
    analytics_storage: 'denied',
  })

  const GA_COOKIE_LIST = ['_ga', '_gat', '_gid']
  const GA_PREFIX = '_ga_'
  const allCookies = document.cookie.split(';').map((cookie) => cookie.split('=')[0].trim())
  const gaCookies = allCookies.filter((cookie) => cookie.startsWith(GA_PREFIX))

  GA_COOKIE_LIST.concat(gaCookies).forEach((cookie) => {
    Cookies.remove(cookie, {
      path: '/',
      domain: `.${location.host.split('.').slice(-2).join('.')}`,
    })
  })

  // Injected script will remain in memory until new session
  location.reload()
}

type PageviewGtmEvent = {
  event: 'pageview'
  page_location: string
  page_path: string
  send_to: string
}

export const gtmTrackPageview = (pagePath: string, pathWithQuery: string): void => {
  const gtmEvent: PageviewGtmEvent = {
    event:'pageview',
    page_location: `${location.origin}${pathWithQuery}`,
    page_path: pagePath,
    send_to: GOOGLE_ANALYTICS_TRACKING_ID,
  }

  sendEvent('page_view', gtmEvent)
}

export const normalizeAppName = (appName?: string): string => {
  // App name is a URL
  if (appName?.startsWith('http')) {
    // Strip search query and hash
    return appName.split('?')[0].split('#')[0]
  }
  return appName || ''
}

const sendEvent = (eventName: string, data: object) => {
  sendGAEvent('event', eventName, data)

  if (!IS_PRODUCTION) {
    console.info('[GA] -', data)
  }
}
