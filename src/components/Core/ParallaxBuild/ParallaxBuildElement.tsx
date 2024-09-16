import Image from 'next/image'
import FrontImage from '@/public/images/Core/Parallaxes/Build/image.png'
import FrameImage from '@/public/images/Core/Parallaxes/Build/background.svg'
import ParallaxWrapper from '@/components/common/ParallaxWrapper'
import css from './styles.module.css'

const ParallaxBuildElement = () => {
  return (
    <div className={css.parallaxWrapper}>
      <FrameImage className={css.baseImage} />
      <ParallaxWrapper translateX={0} translateY={0} depth={2} direction={-1}>
        <Image src={FrontImage} alt="Security logos" className={css.front} />
      </ParallaxWrapper>
    </div>
  )
}

export default ParallaxBuildElement
