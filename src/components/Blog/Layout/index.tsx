import BannerGradientForm from '@/components/Blog/BannerGradientForm'
import MetaTags from '@/components/Campaign/MetaTags'
import { type TypeMetaTagsSkeleton } from '@/contentful/types'
import { isEntryType } from '@/lib/typeGuards'
import { Box } from '@mui/material'
import type { UnresolvedLink, Entry } from 'contentful'
import { type ReactNode } from 'react'

export type MetaTagsEntry = UnresolvedLink<'Entry'> | Entry<TypeMetaTagsSkeleton, undefined, string>

const BlogLayout = ({ children, metaTags }: { children: ReactNode; metaTags: MetaTagsEntry }) => {
  return (
    <>
      {isEntryType(metaTags) ? <MetaTags {...metaTags} /> : undefined}
      <Box mt={{ xs: '24px', md: '100px' }}>
        {children}
        <BannerGradientForm title="Get insider updates" subtitle="Sign up to hear the latest from Safe in your inbox" />
      </Box>
    </>
  )
}

export default BlogLayout
