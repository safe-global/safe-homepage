import { createContext } from 'react'
import type { ChainProps } from '../Networks'

const ChainsContext = createContext<ChainProps[]>([])

export default ChainsContext
