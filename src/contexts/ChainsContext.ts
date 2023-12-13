import { createContext } from 'react'
import type { ChainProps } from '../components/common/Networks'

const ChainsContext = createContext<ChainProps[]>([])

export default ChainsContext
