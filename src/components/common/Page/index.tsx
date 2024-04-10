import getComponentByName from '@/lib/getComponentByName'
import type { Entry } from 'contentful'
import { type TypeLandingPageSkeleton } from '@/contentful/types'
import { isEntryType, isEntryTypeBaseBlock } from '@/lib/typeGuards'
import MetaTags from '@/components/common/MetaTagsContentful'

export type LandingPageEntry = Entry<TypeLandingPageSkeleton, undefined, string>

const Page = ({ landingPage }: { landingPage: LandingPageEntry }) => {
  const { metaTags, content } = landingPage.fields

  return (
    <>
      {isEntryType(metaTags) && <MetaTags {...metaTags} />}
      {content.map((item, index: number) => {
        const componentName = isEntryTypeBaseBlock(item) ? item.fields.component : ''

        if (!componentName) return null

        const Component = getComponentByName(componentName, () => <></>)

        return <Component {...item} key={index} />
      })}
    </>
  )
}

export default Page
