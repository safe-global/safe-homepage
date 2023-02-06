import UspBlock from '@/components/Wallet/UspBlock'
import {
  AvailableNetworksContent,
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
import AvailableNetworks from '@/components/Wallet/AvailableNetworks'

export const Wallet = () => (
  <>
    <HeroSection {...HeroContent} />
    <UspBlock {...YourKeysContent} />
    <ImageText {...CoManageContent} />
    <ImageText {...OwnershipContent} />
    <ImageText {...BatchTransactionsContent} />
    <ImageText {...SignerTypesContent} />
    <AvailableNetworks {...AvailableNetworksContent} />
    <UspBlock {...SelfCustodyContent} />
    <ImageText {...ConvenienceContent} />
    <WalletDownload {...WalletDownloadContent} />
  </>
)

