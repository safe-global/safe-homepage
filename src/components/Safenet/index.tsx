import Architecture from '@/components/Safenet/Architecture'
import CrossChain from '@/components/Safenet/CrossChain'
import Hero from '@/components/Safenet/Hero'
import Metadata from '@/components/Safenet/Metatags'
import Roadmap from '@/components/Safenet/Roadmap'

const Safenet = () => {
  return (
    <div>
      <Metadata />
      <Hero />
      <CrossChain />
      <Architecture />
      <Roadmap />
    </div>
  )
}

export default Safenet
