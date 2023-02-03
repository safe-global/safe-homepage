import UspBlock from '@/components/Wallet/UspBlock'
import {
  BatchTransactionsContent,
  CoManageContent,
  ConvenienceContent,
  HeroContent,
  OwnershipContent,
  SelfCustodyContent,
  SignerTypesContent,
  WalletDownloadContent,
  YourKeysContent,
} from '@/components/Wallet/content'
import ImageText from '@/components/Wallet/ImageText'
import HeroSection from '@/components/Wallet/Hero'
import WalletDownload from '@/components/common/WalletDownload'

export const Wallet = () => (
  <>
    <HeroSection {...HeroContent} />
    <UspBlock {...YourKeysContent} />
    <ImageText {...CoManageContent} />
    <ImageText {...OwnershipContent} />
    <ImageText {...BatchTransactionsContent} />
    <ImageText {...SignerTypesContent} />
    <UspBlock {...SelfCustodyContent} />
    <ImageText {...ConvenienceContent} />
    <WalletDownload {...WalletDownloadContent} />
  </>
)

