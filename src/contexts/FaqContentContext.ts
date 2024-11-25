import { createContext } from 'react'
import type { BaseBlockEntry } from '@/config/types'

const FaqContentContext = createContext<{
  faqContent: BaseBlockEntry | null
}>({
  faqContent: null,
})

export default FaqContentContext
