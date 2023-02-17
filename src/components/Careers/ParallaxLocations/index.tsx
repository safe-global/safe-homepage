import ParallaxLocationsElement from '@/components/Careers/ParallaxLocations/ParallaxLocationsElement'
import ParallaxText, { type ParallaxTextProps } from '@/components/Careers/ParallaxText'

const ParallaxLocations = (props: ParallaxTextProps) => {
  return (
    <ParallaxText {...props}>
      <ParallaxLocationsElement />
    </ParallaxText>
  )
}

export default ParallaxLocations
