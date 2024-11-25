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
      <Roadmap />
    </div>
  )
}

export default Safenet
