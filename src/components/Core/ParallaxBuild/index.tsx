import ParallaxText, { type ParallaxTextProps } from '@/components/common/ParallaxText'
import ParallaxBuildElement from '@/components/Core/ParallaxBuild/ParallaxBuildElement'

const ParallaxBuild = (props: ParallaxTextProps) => (
  <ParallaxText {...props}>{props.items ? <ParallaxBuildElement items={props.items} /> : null}</ParallaxText>
)

export default ParallaxBuild
