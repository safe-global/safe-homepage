import type { ReactElement } from 'react'
import ContractParallaxElement from './ContractParallaxElement'
import ParallaxText, { type ParallaxTextProps } from '@/components/Wallet/ParallaxText'

const ContractParallax = (props: ParallaxTextProps): ReactElement => {
  return (
    <ParallaxText {...props}>
      <ContractParallaxElement />
    </ParallaxText>
  )
}

export default ContractParallax
