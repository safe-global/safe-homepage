import type { TypeMetaTagsSkeleton } from '@/contentful/types'
import type { Entry } from 'contentful'
import React from 'react'
import MetaTags from '@/components/common/MetaTags'
import { isAsset } from '@/lib/typeGuards'
import { appendUrlSecure } from '@/lib/appendSecureUrl'

type MetaTagsEntry = Entry<TypeMetaTagsSkeleton, undefined, string>

const MetaTagsCampaigns = (props: MetaTagsEntry) => {
  const { title, description, image } = props.fields

  const campaignImage = isAsset(image) && image.fields.file?.url ? appendUrlSecure(image.fields.file.url) : undefined

  return <MetaTags pageTitle={title} description={description} image={campaignImage} />
}

export default MetaTagsCampaigns
