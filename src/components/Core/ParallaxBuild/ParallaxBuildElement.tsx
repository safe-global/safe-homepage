import Image from 'next/image'
import BracketsImage from '@/public/images/Core/Parallaxes/Build/brackets.png'
import FrameImage from '@/public/images/Core/Parallaxes/Build/background.svg'
import ParallaxWrapper from '@/components/common/ParallaxWrapper'
import type { BaseBlock } from '@/components/Home/types'
import ArrowIcon from '@/public/images/arrow-out-square-corner.svg'
import css from './styles.module.css'

const blockClassNames = ['stepZero', 'stepOne', 'stepTwo']
const depths = [0, 1] as const

const ParallaxBuildElement = ({ items }: { items: BaseBlock['items'] }) => {
  return (
    <div className={css.parallaxWrapper}>
      <FrameImage className={css.baseImage} />

      {items?.map(({ title, link }, index) => {
        const className = blockClassNames[index]
        const depth = depths[index % 2]

        return (
          <ParallaxWrapper translateX={0} translateY={0} depth={depth} direction={-1} key={index}>
            <a href={link?.href} target="_blank" rel="noreferrer">
              <div className={`${css.movingElement} ${css[className]}`}>
                <div className={css.title}>
                  {title}
                  <ArrowIcon className={css.arrow} />
                </div>
              </div>
            </a>
          </ParallaxWrapper>
        )
      })}

      <ParallaxWrapper translateX={0} translateY={0} depth={2} direction={-1}>
        <Image src={BracketsImage} alt="Code brackets" className={css.brackets} />
      </ParallaxWrapper>
    </div>
  )
}

export default ParallaxBuildElement
