import { IS_PRODUCTION } from '@/config/constants'

/**
 * Notes:
 * connect-src: Allows calls to Ashby's job board, Ecosystem DB API, Snapshot, Contentful and Hotjar.
 * script-src: Allows scripts from Hotjar, and Google Tag Manager. In development, 'unsafe-eval' is allowed for inline scripts to facilitate debugging.
 * img-src: Allows images from Contentful, Ecosystem DB for the project logos, Safe Claiming App for guardians images, and data URIs.
 * frame-src: Allows iframes from Mirror, Youtube and JWPlayer.
 */
export const ContentSecurityPolicy = `
 default-src 'self';
 connect-src 'self' https://*.google-analytics.com https://api.ashbyhq.com/posting-api/job-board/safe.global/ https://ecosystem-database.safe.global/data.json https://ecosystem-database.staging.5afe.dev/data.json https://hub.snapshot.org/graphql https://cdn.contentful.com/spaces/1i5gc724wjeu/ https://metrics.hotjar.io/ https://content.hotjar.io/ wss://ws.hotjar.com https://api.pushwoosh.com/;
 script-src 'self' ${
   IS_PRODUCTION ? '' : "'unsafe-eval'"
 } 'unsafe-inline' https://script.hotjar.com https://static.hotjar.com https://www.googletagmanager.com https://platform.twitter.com;
 style-src 'self' 'unsafe-inline';
 font-src 'self';
 object-src 'none';
 base-uri 'none';
 img-src 'self' http://images.ctfassets.net/ https://ecosystem-database.safe.global/logos/ https://ecosystem-database.staging.5afe.dev/logos/ https://safe-claiming-app-data.safe.global/guardians/images/ data:;
 frame-src https://safe.mirror.xyz/ https://www.youtube-nocookie.com/ https://cdn.jwplayer.com/ https://platform.twitter.com/;
`
  .replace(/\s{2,}/g, ' ')
  .trim()
