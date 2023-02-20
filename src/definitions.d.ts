import type { DataLayer } from '@/services/analytics/TagManager'

declare global {
  interface Window {
    dataLayer?: DataLayer[]
  }
}
