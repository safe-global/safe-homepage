import FrameImage from '@/public/images/Careers/Locations/background.svg'
import Location1Image from '@/public/images/Careers/Locations/location1.svg'
import Location2Image from '@/public/images/Careers/Locations/location2.svg'
import Location3Image from '@/public/images/Careers/Locations/location3.svg'
import Location4Image from '@/public/images/Careers/Locations/location4.svg'
import ParallaxWrapper from '@/components/common/ParallaxWrapper'
import css from './styles.module.css'

const ParallaxLocationsElement = () => {
  return (
    <div className={css.parallaxWrapper}>
      <FrameImage className={css.baseImage} />
      <ParallaxWrapper translateX={0} translateY={0} depth={0} direction={-1}>
        <Location1Image className={css.location1} />
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={0} depth={0} direction={-1}>
        <Location2Image className={css.location2} />
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={0} depth={0} direction={-1}>
        <Location3Image className={css.location3} />
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={0} depth={0} direction={-1}>
        <Location4Image className={css.location4} />
      </ParallaxWrapper>
    </div>
  )
}

export default ParallaxLocationsElement
