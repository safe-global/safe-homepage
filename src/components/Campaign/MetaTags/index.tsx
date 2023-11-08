import type { TypeMetaTagsSkeleton } from '@/contentful/types'
import type { Entry } from 'contentful'
import React from 'react'
import MetaTags from '@/components/common/MetaTags'

type MetaTagsEntry = Entry<TypeMetaTagsSkeleton, undefined, string>

const MetaTagsCampaigns = (props: MetaTagsEntry) => {
  const { title, description } = props.fields

  return <MetaTags pageTitle={title} description={description} />
}

export default MetaTagsCampaigns
