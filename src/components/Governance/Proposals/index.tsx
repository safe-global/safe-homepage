import dynamic from 'next/dynamic'

const Proposals = dynamic(() => import('./Proposals'))

export default Proposals
