import TitleSlidingIcons from '@/components/Home/TitleSlidingIcons'
import type { BaseBlock } from '@/components/Home/types'
import type { Carousel } from '@/components/Home/TitleSlidingIcons/IconCarouselElement'
import layoutCss from '@/components/common/styles.module.css'

const TrustedBy = (props: BaseBlock & Carousel) => (
  <div className={layoutCss.containerShort}>
    <TitleSlidingIcons {...props} />
  </div>
)

export default TrustedBy
