import { IS_PRODUCTION } from '@/config/constants'

export const ContentSecurityPolicy = `
 default-src 'self';
 connect-src 'self' https://api.ashbyhq.com/posting-api/job-board/safe.global/ https://ecosystem-database.staging.5afe.dev/data.json https://hub.snapshot.org/graphql https://cdn.contentful.com/spaces/1i5gc724wjeu/ https://metrics.hotjar.io/;
 script-src 'self' ${
   IS_PRODUCTION ? '' : "'unsafe-eval'"
 } 'unsafe-inline' https://script.hotjar.com https://static.hotjar.com https://www.googletagmanager.com;
 style-src 'self' 'unsafe-inline';
 font-src 'self';
 object-src 'none';
 base-uri 'none';
 img-src 'self' http://images.ctfassets.net/ https://ecosystem-database.staging.5afe.dev/logos/ https://safe-claiming-app-data.safe.global/guardians/images/ data:;
 frame-src https://safe.mirror.xyz/ https://www.youtube-nocookie.com/ https://cdn.jwplayer.com/;
`
  .replace(/\s{2,}/g, ' ')
  .trim()
