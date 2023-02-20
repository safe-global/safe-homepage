/**
 * Google Tag Manager-related functions.
 *
 * Initializes and un-initializes GTM in production or dev mode.
 * Allows sending datalayer events to GTM.
 */

import {
  IS_PRODUCTION,
  GOOGLE_TAG_MANAGER_ID,
  GOOGLE_TAG_MANAGER_AUTH_LIVE,
  GOOGLE_TAG_MANAGER_DEVELOPMENT_AUTH,
} from '@/config/constants'
import TagManager from '@/services/analytics/TagManager'
import type { TagManagerArgs } from '@/services/analytics/TagManager'

type GTMEnvironment = 'LIVE' | 'DEVELOPMENT'
type GTMEnvironmentArgs = Required<Pick<TagManagerArgs, 'auth' | 'preview'>>

const GTM_ENV_AUTH: Record<GTMEnvironment, GTMEnvironmentArgs> = {
  LIVE: {
    auth: GOOGLE_TAG_MANAGER_AUTH_LIVE,
    // TODO: Check that it matches the auth environment
    preview: 'env-1',
  },
  DEVELOPMENT: {
    // TODO: Check that it matches the auth environment
    auth: GOOGLE_TAG_MANAGER_DEVELOPMENT_AUTH,
    preview: 'env-2',
  },
}

export const gtmInit = (): void => {
  const GTM_ENVIRONMENT = IS_PRODUCTION ? GTM_ENV_AUTH.LIVE : GTM_ENV_AUTH.DEVELOPMENT

  if (!GOOGLE_TAG_MANAGER_ID || !GTM_ENVIRONMENT.auth) {
    console.warn('[GTM] - Unable to initialize Google Tag Manager. `id` or `gtm_auth` missing.')
    return
  }

  TagManager.initialize({
    gtmId: GOOGLE_TAG_MANAGER_ID,
    ...GTM_ENVIRONMENT,
    dataLayer: {
      // Block JS variables and custom scripts
      // @see https://developers.google.com/tag-platform/tag-manager/web/restrict
      'gtm.blocklist': ['j', 'jsm', 'customScripts'],
    },
  })
}

export const gtmClear = TagManager.disable

const gtmSend = TagManager.dataLayer

enum EventType {
  PAGEVIEW = 'pageview',
  CLICK = 'customClick',
  META = 'metadata',
}

type EventLabel = string | number | boolean | null

type AnalyticsEvent = {
  event?: EventType
  category: string
  action: string
  label?: EventLabel
}

type ActionGtmEvent = {
  event: EventType
  eventCategory: string
  eventAction: string
  eventLabel?: EventLabel
  eventType?: EventType
}

export const gtmTrack = (eventData: AnalyticsEvent): void => {
  const gtmEvent: ActionGtmEvent = {
    event: eventData.event || EventType.CLICK,
    eventCategory: eventData.category,
    eventAction: eventData.action,
    eventLabel: eventData.label,
  }

  gtmSend(gtmEvent)
}
