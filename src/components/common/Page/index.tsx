import getComponentByName from '@/lib/getComponentByName'
import { isEntryType, isEntryTypeBaseBlock } from '@/lib/typeGuards'
import MetaTags from '@/components/common/MetaTagsContentful'
import { type LandingPageEntry } from '@/config/types'

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
