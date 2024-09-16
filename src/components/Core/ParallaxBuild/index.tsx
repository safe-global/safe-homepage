import ParallaxText, { type ParallaxTextProps } from '@/components/common/ParallaxTextOld'
import ParallaxBuildElement from '@/components/Core/ParallaxBuild/ParallaxBuildElement'

const ParallaxBuild = (props: ParallaxTextProps) => {
  return (
    <ParallaxText {...props}>
      <ParallaxBuildElement />
    </ParallaxText>
  )
}

export default ParallaxBuild
