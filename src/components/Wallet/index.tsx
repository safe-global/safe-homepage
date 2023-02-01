import UspBlock from '@/components/Wallet/UspBlock'
import {
  BatchTransactionsContent,
  CoManageContent,
  HeroContent,
  OwnershipContent,
  SelfCustodyContent,
  SignerTypesContent,
  YourKeysContent,
} from '@/components/Wallet/content'
import ImageText from '@/components/Wallet/ImageText'
import HeroSection from '@/components/Wallet/Hero'

export const Wallet = () => (
  <>
    <HeroSection {...HeroContent} />
    <UspBlock {...YourKeysContent} />
    <ImageText {...CoManageContent} />
    <ImageText {...OwnershipContent} />
    <ImageText {...BatchTransactionsContent} />
    <ImageText {...SignerTypesContent} />
    <UspBlock {...SelfCustodyContent} />
  </>
)

