import dynamic from 'next/dynamic'

const Proposals = dynamic(() => import('./ParallaxDaoStats'))

export default Proposals
