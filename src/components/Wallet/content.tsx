import ShieldIcon from '@/public/images/Wallet/shield.svg'
import CheckIcon from '@/public/images/Wallet/check.svg'
import SettingsIcon from '@/public/images/Wallet/settings.svg'
import type { UspBlockProps } from '@/components/Wallet/UspBlock'
import { ImageTextProps } from '@/components/Wallet/ImageText'
import CoManageImage from '@/public/images/Wallet/co-manage.png'
import OwnershipImage from '@/public/images/Wallet/ownership.png'
import BatchTransactionsImage from '@/public/images/Wallet/batch-transactions.png'
import SignerTypesImage from '@/public/images/Wallet/signer-types.png'
import Image from 'next/image'
import css from '@/components/common/styles.module.css'

export const YourKeysContent: UspBlockProps = {
  title: 'Your keys. Your coins.',
  items: [
    {
      icon: ShieldIcon,
      title: 'Battle Tested Security',
      text: 'Top notch security and custom access control for you and for your users.',
    },
    {
      icon: CheckIcon,
      title: 'Co-ownership',
      text: 'Multi-sig based trustless group ownership ownership and asset co-ordination.',
    },
    {
      icon: SettingsIcon,
      title: 'Self-custody',
      text: 'We never own any of the assets stored in user accounts. We never will.',
    },
  ],
}

export const CoManageContent: ImageTextProps = {
  variant: 'text-image',
  image: <Image src={CoManageImage} alt="Accounts around a multisig" />,
  textBlock: {
    title: (
      <>
        <span className={css.primaryColor}>Co-manage</span> your assets
      </>
    ),
    text: 'With multiple private keys, the same account can be jointly managed by several users enabling co-ownership that powers DAOs, groups and enterprises.',
    buttons: [{ text: 'Get started', href: '#', variant: 'link' }],
  },
}

export const OwnershipContent: ImageTextProps = {
  variant: 'image-text',
  image: <Image src={OwnershipImage} alt="Transactions require confirmations from owners" />,
  textBlock: {
    title: (
      <>
        Control and change account <span className={css.primaryColor}>ownership</span>
      </>
    ),
    text: 'Add new signers, remove signers and replace ownership by simply changing the private key(s) that control the account.',
    buttons: [{ text: 'Get started', href: '#', variant: 'link' }],
  },
}

export const BatchTransactionsContent: ImageTextProps = {
  variant: 'text-image',
  image: <Image src={BatchTransactionsImage} alt="Batching transactions" />,
  textBlock: {
    title: (
      <>
        Save on gas by batching <span className={css.primaryColor}>multiple transactions</span> in a few clicks
      </>
    ),
    text: 'Easily batch transactions you want to make together to save on gas.',
    buttons: [{ text: 'Get started', href: '#', variant: 'link' }],
  },
}

export const SignerTypesContent: ImageTextProps = {
  variant: 'image-text',
  image: <Image src={SignerTypesImage} alt="Different wallet types" />,
  textBlock: {
    title: (
      <>
        Use <span className={css.primaryColor}>any type of signer</span> to control your account
      </>
    ),
    text: 'From hardware wallets like ledger, tresor, to metamask type externally owned accounts, use all of these as signers on your Safe WALLET.',
    buttons: [{ text: 'Get started', href: '#', variant: 'link' }],
  },
}
