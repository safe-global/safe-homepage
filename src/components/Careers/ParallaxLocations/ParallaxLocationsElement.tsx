import Image from 'next/image'
import FrameImage from '@/public/images/Careers/Locations/background.svg'
import Location1Image from '@/public/images/Careers/Locations/location1.png'
import Location2Image from '@/public/images/Careers/Locations/location2.png'
import Location3Image from '@/public/images/Careers/Locations/location3.png'
import Location4Image from '@/public/images/Careers/Locations/location4.png'
import ParallaxWrapper from '@/components/common/ParallaxWrapper'
import css from './styles.module.css'

const ParallaxLocationsElement = () => {
  return (
    <div className={css.parallaxWrapper}>
      <FrameImage className={css.baseImage} />
      <ParallaxWrapper translateX={0} translateY={0} depth={0} direction={-1}>
        <Image src={Location1Image} alt="Safe hub locations" className={css.location1} />
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={0} depth={0} direction={-1}>
        <Image src={Location2Image} alt="Safe hub locations" className={css.location2} />
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={0} depth={0} direction={-1}>
        <Image src={Location3Image} alt="Safe hub locations" className={css.location3} />
      </ParallaxWrapper>
      <ParallaxWrapper translateX={0} translateY={0} depth={0} direction={-1}>
        <Image src={Location4Image} alt="Safe hub locations" className={css.location4} />
      </ParallaxWrapper>
    </div>
  )
}

export default ParallaxLocationsElement
