export const LS_NAMESPACE = 'SAFE__'

export const IS_PRODUCTION = process.env.NEXT_PUBLIC_IS_PRODUCTION
export const GOOGLE_ANALYTICS_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID || ''

// Links
export const WALLET_LINK = 'https://app.safe.global'
export const CORE_LINK = 'https://core.safe.global'
export const PRESS_LINK = 'https://press.safe.global'
export const HELP_LINK = 'https://help.safe.global'
export const DOCS_LINK = 'https://docs.safe.global'
export const FORUM_LINK = 'https://forum.safe.global'
export const CHAT_LINK = 'https://chat.safe.global'
export const GUARDIANS_LINK = 'https://forum.safe.global/t/guardians-gather/265'
export const IOS_LINK = 'https://apps.apple.com/app/id1515759131'
export const GPLAY_LINK = 'https://play.google.com/store/apps/details?id=io.gnosis.safe'
export const BRAND_KIT = 'https://press.safe.global'
export const LICENSES_LINK = 'https://app.safe.global/licenses'

export const PROTOCOL_KIT_LINK = 'https://docs.safe.global/learn/safe-core-account-abstraction-sdk/protocol-kit'
export const AUTH_KIT_LINK = 'https://docs.safe.global/learn/safe-core-account-abstraction-sdk/auth-kit'
export const RELAY_KIT_LINK = 'https://docs.safe.global/learn/safe-core-account-abstraction-sdk/relay-kit'
export const ONRAMP_KIT_LINK = 'https://docs.safe.global/learn/safe-core-account-abstraction-sdk/onramp-kit'

export const ECOSYSTEM_DATA_URL = IS_PRODUCTION
  ? 'https://ecosystem-database.staging.5afe.dev' // TODO: Replace with Prod URL once ready
  : 'https://ecosystem-database.staging.5afe.dev'
