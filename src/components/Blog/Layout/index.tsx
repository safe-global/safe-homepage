import BannerForm from '@/components/Blog/BannerForm'
import MetaTags from '@/components/common/MetaTagsContentful'
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
      <Box mt={{ xs: '24px', md: '120px' }}>
        {children}
        <BannerForm
          title="Get the Alpha"
          subtitle={
            <>
              Sign up to hear the latest from <i>Safe</i> in your inbox
            </>
          }
        />
      </Box>
    </>
  )
}

export default BlogLayout
