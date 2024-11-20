export const LS_NAMESPACE = 'SAFE__'

export const IS_PRODUCTION = process.env.NEXT_PUBLIC_IS_PRODUCTION
export const GOOGLE_ANALYTICS_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID || ''
export const GOOGLE_ANALYTICS_DOMAIN = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_DOMAIN || 'safe.global'
export const HOTJAR_ID = process.env.NEXT_PUBLIC_HOTJAR_ID || ''
export const HOTJAR_ID_STAGING = process.env.NEXT_PUBLIC_HOTJAR_ID_STAGING || ''
export const HOTJAR_VERSION = process.env.NEXT_PUBLIC_HOTJAR_VERSION || '6'
export const DUNE_API_KEY = process.env.DUNE_API_KEY || ''

// Links
export const WALLET_LINK = 'https://app.safe.global'
export const SAFECON_LINK = 'https://conf.safe.global'
export const CORE_LINK = 'https://safe.global/core'
export const PRESS_LINK = 'https://press.safe.global'
export const HELP_LINK = 'https://help.safe.global'
export const DOCS_LINK = 'https://docs.safe.global'
export const FORUM_LINK = 'https://forum.safe.global'
export const IOS_LINK = 'https://apps.apple.com/app/id1515759131'
export const GPLAY_LINK = 'https://play.google.com/store/apps/details?id=io.gnosis.safe'
export const LICENSES_LINK = 'https://app.safe.global/licenses'
export const GOVERNANCE_LINK = 'https://gov.safe.global'
export const ECOSYSTEM_LINK = 'https://safe.global/ecosystem'
export const GRANTS_LINK = 'https://grants.safe.global'
export const TWITTER_LINK = 'https://x.com/safe'
export const DISCORD_LINK = 'https://chat.safe.global'
export const YOUTUBE_LINK = 'https://www.youtube.com/@safeglobal'
export const MIRROR_LINK = 'https://safe.mirror.xyz'
export const MIRROR_SUBSCRIBE_LINK = 'https://safe.mirror.xyz/subscribe/embed'
export const GITHUB_LINK = 'https://github.com/safe-global'
export const ALPHA_LUMA_LINK = 'https://lu.ma/bh1ox3g9'
export const ALPHA_TELEGRAM_LINK = 'https://dub.sh/safealpha'

export const PROTOCOL_KIT_LINK = 'https://docs.safe.global/safe-core-aa-sdk/protocol-kit'
export const AUTH_KIT_LINK = 'https://docs.safe.global/safe-core-aa-sdk/auth-kit'
export const RELAY_KIT_LINK = 'https://docs.safe.global/safe-core-aa-sdk/relay-kit'
export const ONRAMP_KIT_LINK = 'https://docs.safe.global/safe-core-aa-sdk/onramp-kit'

export const DOCS_SDK = 'https://docs.safe.global/sdk/overview'
export const DOCS_INFRASTRUCTURE = 'https://docs.safe.global/core-api/api-overview'
export const DOCS_SMART_CONTRACTS = 'https://docs.safe.global/advanced/smart-account-overview'

export const ECOSYSTEM_DATA_URL = IS_PRODUCTION
  ? 'https://ecosystem-database.safe.global'
  : 'https://ecosystem-database.staging.5afe.dev'

export const COMMS_EMAIL = 'comms@safe.global'

export const PUSHWOOSH_ENDPOINT = 'https://api.pushwoosh.com/json/1.3/registerEmail'
