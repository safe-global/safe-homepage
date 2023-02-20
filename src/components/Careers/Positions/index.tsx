import dynamic from 'next/dynamic'

const Positions = dynamic(() => import('./Positions'))

export default Positions
