import Architecture from '@/components/Safenet/Architecture'
import ChainAbstraction from '@/components/Safenet/ChainAbstraction'
import Hero from '@/components/Safenet/Hero'
import Metadata from '@/components/Safenet/Metatags'
import Roadmap from '@/components/Safenet/Roadmap'

const Safenet = () => {
  return (
    <div>
      <Metadata />
      <Hero />
      <ChainAbstraction />
      <Architecture />
      <Roadmap />
    </div>
  )
}

export default Safenet
