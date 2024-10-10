import TitleSlidingIcons from '@/components/common/TitleSlidingIcons'
import type { BaseBlock } from '@/components/Home/types'
import type { Carousel } from '@/components/common/TitleSlidingIcons/IconCarouselElement'
import layoutCss from '@/components/common/styles.module.css'

const TrustedBy = (props: BaseBlock & Carousel) => (
  <div className={layoutCss.containerShort}>
    <TitleSlidingIcons {...props} />
  </div>
)

export default TrustedBy
