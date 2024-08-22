import { IS_PRODUCTION } from '@/config/constants'

export const ContentSecurityPolicy = `
 default-src 'self';
 connect-src 'self' https://api.ashbyhq.com/posting-api/job-board/safe.global/;
 script-src 'self' ${
   IS_PRODUCTION ? '' : "'unsafe-eval'"
 } 'unsafe-inline' https://static.hotjar.com/c/hotjar-3603830.js;
 style-src 'self' 'unsafe-inline';
 font-src 'self' data:;
 object-src 'none';
 base-uri 'none';
`
  .replace(/\s{2,}/g, ' ')
  .trim()
