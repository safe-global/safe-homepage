import React from 'react'
import { capitalizeFirstLetter } from '@/lib/capitalizeFirstLetter'
import getComponentByName from '@/lib/getComponentByName'
import type { Entry } from 'contentful'
import css from './styles.module.css'
import { type TypePageSkeleton } from '@/contentful/types'
import { isEntryType } from '@/lib/typeGuards'
import MetaTags from '@/components/common/MetaTagsContentful'

export type CampaignPageEntry = Entry<TypePageSkeleton, undefined, string>

const Campaign = ({ campaignPage }: { campaignPage: CampaignPageEntry }) => {
  const { metaTags, content } = campaignPage.fields

  return (
    <>
      {isEntryType(metaTags) && <MetaTags {...metaTags} />}
      <div className={css.pageContainer}>
        {content.map((item, index: number) => {
          const contentType = isEntryType(item) ? item.sys.contentType.sys.id : ''
          const componentName = capitalizeFirstLetter(contentType)

          const Component = getComponentByName(`Campaigns/${componentName}`, () => <></>)

          return <Component {...item} key={index} />
        })}
      </div>
    </>
  )
}

export default Campaign
