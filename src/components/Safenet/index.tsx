import Architecture from '@/components/Safenet/Architecture'
import CrossChain from '@/components/Safenet/CrossChain'
import Hero from '@/components/Safenet/Hero'
import Metadata from '@/components/Safenet/Metatags'
import Roadmap from '@/components/Safenet/Roadmap'
import Values from '@/components/Safenet/Values'
import Waitlist from '@/components/Safenet/Waitlist'

const Safenet = () => (
  <div>
    <Metadata />
    <Hero />
    <CrossChain />
    <Architecture />
    <Roadmap />
    <Values />
    <Waitlist />
  </div>
)

export default Safenet
