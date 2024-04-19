import ParallaxWrapper from '@/components/common/ParallaxWrapper'
import { type ParallaxTextProps } from '@/components/Token/ParallaxText'
import { isAsset } from '@/lib/typeGuards'
import css from './styles.module.css'

const ParallaxRewardsElement = (props: ParallaxTextProps) => {
  const { image, bgImage } = props.fields

  return (
    <div className={css.parallaxWrapper}>
      {isAsset(bgImage) && bgImage.fields.file?.url ? (
        <img src={bgImage.fields.file.url} alt={bgImage.fields.title ?? ''} className={css.baseImage} />
      ) : null}
      <ParallaxWrapper translateX={0} translateY={0} depth={0} direction={-1}>
        {isAsset(image) && image.fields.file?.url ? (
          <img src={image.fields.file.url} alt={image.fields.title ?? ''} className={css.movingElement} />
        ) : null}
      </ParallaxWrapper>
    </div>
  )
}

export default ParallaxRewardsElement
