import { walletContent } from '@/components/Wallet/content'

export const Wallet = () => (
  <>
    {walletContent.map(({ component: Component, ...rest }, index) => {
      return <Component key={index} {...rest} />
    })}
  </>
)
