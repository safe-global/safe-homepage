import Image from 'next/image'
import ShieldIcon from '@/public/images/Wallet/shield.svg'
import CheckIcon from '@/public/images/Wallet/check.svg'
import SettingsIcon from '@/public/images/Wallet/settings.svg'
import ArbitrumIcon from '@/public/images/chainsLogos/ArbitrumLogo.png'
import AuroraIcon from '@/public/images/chainsLogos/AuroraLogo.png'
import AvalancheIcon from '@/public/images/chainsLogos/AvalancheLogo.png'
import BNBIcon from '@/public/images/chainsLogos/BNBLogo.png'
import EthereumIcon from '@/public/images/chainsLogos/EthereumLogo.png'
import GnosisChainIcon from '@/public/images/chainsLogos/GnosisChainLogo.png'
import OptimismIcon from '@/public/images/chainsLogos/OptimismLogo.png'
import PolygonIcon from '@/public/images/chainsLogos/PolygonLogo.png'
import type { UspBlockProps } from '@/components/Wallet/UspBlock'
import type { ImageTextProps } from '@/components/Wallet/ImageText'
import type { HeroSectionProps } from '@/components/Wallet/Hero'
import CoManageImage from '@/public/images/Wallet/co-manage.png'
import OwnershipImage from '@/public/images/Wallet/ownership.png'
import BatchTransactionsImage from '@/public/images/Wallet/batch-transactions.png'
import SignerTypesImage from '@/public/images/Wallet/signer-types.png'
import PocketMultisigImage from '@/public/images/Wallet/pocket-multisig.png'
import ClientAppsImage from '@/public/images/Wallet/clients.png'
import type { StepsType } from '@/components/Wallet/Stepper'
import Stepper, { StepState } from '@/components/Wallet/Stepper'
import css from '@/components/common/styles.module.css'
import type { AvailableNetworksProps } from '@/components/Wallet/AvailableNetworks'

export const YourKeysContent: UspBlockProps = {
  width: 4,
  title: 'Your keys. Your coins.',
  items: [
    {
      icon: <ShieldIcon />,
      title: 'Battle Tested Security',
      text: 'Top notch security and custom access control for you and for your users.',
    },
    {
      icon: <CheckIcon />,
      title: 'Co-ownership',
      text: 'Multi-sig based trustless group ownership ownership and asset co-ordination.',
    },
    {
      icon: <SettingsIcon />,
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

export const HeroContent: HeroSectionProps = {
  image: <Image src={ClientAppsImage} alt="Web and mobile clients" />,
  textBlock: {
    title: 'The most secure way to own assets',
    button: { text: 'Launch wallet', href: '#' },
  },
}

export const AvailableNetworksContent: Omit<AvailableNetworksProps, 'chainsData'> = {
  networks: [
    [
      {
        name: 'Ethereum Mainnet',
        icon: <Image src={EthereumIcon} alt="Ethereum logo" />,
      },
      {
        name: 'BNB Smart Chain',
        icon: <Image src={BNBIcon} alt="BNB Chain logo" />,
      },
      {
        name: 'Optimism',
        icon: <Image src={OptimismIcon} alt="Optimism logo" />,
      },
      {
        name: 'Arbitrum',
        icon: <Image src={ArbitrumIcon} alt="Arbitrum logo" />,
      },
      {
        name: 'Polygon',
        icon: <Image src={PolygonIcon} alt="Polygon logo" />,
      },
      {
        name: 'Avalanche',
        icon: <Image src={AvalancheIcon} alt="Avalanche logo" />,
      },
      {
        name: 'Gnosis Chain',
        icon: <Image src={GnosisChainIcon} alt="Gnosis Chain logo" />,
      },
    ],
    [
      {
        name: 'Avalanche',
        icon: <Image src={AvalancheIcon} alt="Avalanche logo" />,
      },
      {
        name: 'Polygon',
        icon: <Image src={PolygonIcon} alt="Polygon logo" />,
      },
      {
        name: 'Gnosis Chain',
        icon: <Image src={GnosisChainIcon} alt="Gnosis Chain logo" />,
      },
      {
        name: 'Aurora',
        icon: <Image src={AuroraIcon} alt="Aurora logo" />,
      },
      {
        name: 'Ethereum Mainnet',
        icon: <Image src={EthereumIcon} alt="Ethereum logo" />,
      },
      {
        name: 'Optimism',
        icon: <Image src={OptimismIcon} alt="Optimism logo" />,
      },
      {
        name: 'BNB Smart Chain',
        icon: <Image src={BNBIcon} alt="BNB Chain logo" />,
      },
    ],
  ],
}

export type ColumnWidths = 3 | 4

export const SelfCustodyContent = {
  width: 3 as ColumnWidths,
  title: 'Empowering self-custody',
  text: '',
  items: [
    {
      title: 'Hardware support',
      text: 'Our personal education and conference budgets will help you grow professionally!',
    },
    {
      title: 'Top notch security',
      text: 'You can use your Friday afternoons for research or a side project in our ecosystem!',
    },
    {
      title: 'Dapp support',
      text: 'Build your team spirit on cool trips and retreats.',
    },
    {
      title: 'Permissions',
      text: 'Flexible working schedules and hybrid working policies have been a part of our culture for a long time.',
    },
    {
      title: 'Build with SDK',
      text: 'Our personal education and conference budgets will help you grow professionally!',
      caption: 'Coming soon',
    },
    {
      title: 'Relay easily',
      text: 'You can use your Friday afternoons for research or a side project in our ecosystem!',
      caption: 'Coming soon',
    },
    {
      title: 'Dapp support',
      text: 'Build your team spirit on cool trips and retreats.',
    },
    {
      title: 'Permissions',
      text: 'Flexible working schedules and hybrid working policies have been a part of our culture for a long time.',
    },
  ],
}

const convenienceContentSteps: StepsType = [
  {
    label: 'Create a new signer account',
    state: StepState.COMPLETED,
  },
  {
    label: 'Allow push notifications',
    description: 'Track your assets and transactions on mobile. Stay informed on-the-go.',
    state: StepState.ACTIVE,
  },
  {
    label: 'Hardware wallet support',
  },
]

export const ConvenienceContent: ImageTextProps = {
  variant: 'text-image',
  image: <Image src={PocketMultisigImage} alt="Safe mobile app" />,
  textBlock: {
    title: <span>Convenience of multisig in your pocket</span>,
    text: 'Track your assets and transactions on mobile. Stay informed on-the-go.',
    subBlock: <Stepper steps={convenienceContentSteps} />,
  },
}

export const WalletDownloadContent = {
  title: 'Use Safe {WALLET} anywhere',
  text: 'Access your assets anywhere without compromising on security on our flagship interfaces built on Safe {Core}.',
}
