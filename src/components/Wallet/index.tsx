import UspBlock from '@/components/Wallet/UspBlock'
import {
  BatchTransactionsContent,
  CoManageContent,
  OwnershipContent,
  SignerTypesContent,
  YourKeysContent,
} from '@/components/Wallet/content'
import ImageText from '@/components/Wallet/ImageText'

export const Wallet = () => (
  <>
    <UspBlock {...YourKeysContent} />
    <ImageText {...CoManageContent} />
    <ImageText {...OwnershipContent} />
    <ImageText {...BatchTransactionsContent} />
    <ImageText {...SignerTypesContent} />
  </>
)

