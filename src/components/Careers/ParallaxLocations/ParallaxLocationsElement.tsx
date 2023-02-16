import Image from 'next/image'
import FrameImage from '@/public/images/Careers/Locations/background.svg'
import LocationsImage from '@/public/images/Careers/Locations/locations.png'
import ParallaxWrapper from '@/components/common/ParallaxWrapper'
import css from './styles.module.css'

const ParallaxLocationsElement = () => {
  return (
    <div className={css.parallaxWrapper}>
      <FrameImage className={css.baseImage} />
      <ParallaxWrapper translateX={0} translateY={0} depth={0} direction={-1}>
        <Image src={LocationsImage} alt="Safe hub locations" className={css.locations} />
      </ParallaxWrapper>
    </div>
  )
}

export default ParallaxLocationsElement
