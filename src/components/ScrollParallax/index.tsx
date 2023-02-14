import ParallaxWrapper from '@/components/common/ParallaxWrapper'
import { type ParallaxProps } from '@/hooks/useScrollParallax'
import css from './styles.module.css'

export type ScrollParallaxProps = {
  baseImage: {
    src: string
    alt: string
  }
  layers: Array<
    ParallaxProps & {
      image: {
        src: string
        alt: string
      }
    } & {
      initialPosition: {
        bottom: string
        right: string
      }
    }
  >
}

const ScrollParallax = ({ baseImage, layers }: ScrollParallaxProps) => (
  <div className={css.parallaxWrapper}>
    <img src={baseImage.src} alt={baseImage.alt} />
    {layers.map(({ image, translateX, translateY, depth, direction, initialPosition }, index) => (
      <ParallaxWrapper key={index} translateX={translateX} translateY={translateY} depth={depth} direction={direction}>
        <img {...image} className={css.layer} style={initialPosition} />
      </ParallaxWrapper>
    ))}
  </div>
)

export default ScrollParallax
