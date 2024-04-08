import getComponentByName from '@/lib/getComponentByName'
import type { Entry } from 'contentful'
import { type TypeLandingPageSkeleton } from '@/contentful/types'
import { isEntryType } from '@/lib/typeGuards'
import MetaTags from '@/components/common/MetaTagsContentful'

export type LandingPageEntry = Entry<TypeLandingPageSkeleton, undefined, string>

const Page = ({ landingPage }: { landingPage: LandingPageEntry }) => {
  const { metaTags, content } = landingPage.fields

  return (
    <>
      {isEntryType(metaTags) && <MetaTags {...metaTags} />}
      {content.filter(isEntryType).map((item, index: number) => {
        const componentName = isEntryType(item) ? item.fields.component : ''

        const Component = getComponentByName(componentName, () => <></>)

        return <Component {...item} key={index} />
      })}
    </>
  )
}

export default Page
