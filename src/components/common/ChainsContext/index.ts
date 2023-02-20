import { createContext } from 'react'
import { ChainProps } from '../Networks'

const ChainsContext = createContext<ChainProps[]>([])

export default ChainsContext
