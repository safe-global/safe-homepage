import ReactGA from 'react-ga4'
import type { UaEventOptions } from 'react-ga4/types/ga4'

export const trackEvent = (eventData: UaEventOptions | string) => {
  ReactGA.event(eventData)
}
