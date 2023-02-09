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
import type { StepsType } from '@/components/Wallet/Stepper'
import CoManageImage from '@/public/images/Wallet/co-manage.png'
import OwnershipImage from '@/public/images/Wallet/ownership.png'
import BatchTransactionsImage from '@/public/images/Wallet/batch-transactions.png'
import SignerTypesImage from '@/public/images/Wallet/signer-types.png'
import PocketMultisigImage from '@/public/images/Wallet/pocket-multisig.png'
import ClientAppsImage from '@/public/images/Wallet/clients.png'
import SimulateTransactionsImage from '@/public/images/Wallet/simulate-transactions.png'
import Stepper from '@/components/Wallet/Stepper'
import HeroSection from '@/components/Wallet/Hero'
import UspBlock from '@/components/Wallet/UspBlock'
import ImageText from '@/components/Wallet/ImageText'
import AvailableNetworks from '@/components/Wallet/AvailableNetworks'
import WalletDownload from '@/components/common/WalletDownload'

export type ColumnWidths = 3 | 4

const convenienceContentSteps: StepsType = [
  {
    label: 'Create a new signer account',
    state: 'completed',
  },
  {
    label: 'Allow push notifications',
    description: 'Track your assets and transactions on mobile. Stay informed on-the-go.',
    state: 'active',
  },
  {
    label: 'Hardware wallet support',
  },
]

export const walletContent = [
  {
    image: <Image src={ClientAppsImage} alt="Web and mobile clients" />,
    textBlock: {
      title: 'The most secure way to own assets',
      button: { text: 'Launch wallet', href: '#' },
    },
    component: HeroSection,
  },
  {
    variant: '3-columns',
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
    component: UspBlock,
  },
  {
    variant: 'text-image',
    image: <Image src={CoManageImage} alt="Accounts around a multisig" />,
    textBlock: {
      title: (
        <>
          <b>Co-manage</b> your assets
        </>
      ),
      text: 'With multiple private keys, the same account can be jointly managed by several users enabling co-ownership that powers DAOs, groups and enterprises.',
      buttons: [{ text: 'Get started', href: '#', variant: 'link' }],
    },
    component: ImageText,
  },
  {
    variant: 'image-text',
    image: <Image src={OwnershipImage} alt="Transactions require confirmations from owners" />,
    textBlock: {
      title: (
        <>
          <b>Control and change account</b> ownership
        </>
      ),
      text: 'Add new signers, remove signers and replace ownership by simply changing the private key(s) that control the account.',
      buttons: [{ text: 'Get started', href: '#', variant: 'link' }],
    },
    component: ImageText,
  },
  {
    variant: 'text-image',
    // TODO: image to be replaced when available from design
    image: <Image src={OwnershipImage} alt="Transactions require confirmations from owners" />,
    textBlock: {
      title: 'Built-in App Store',
      text: 'Use the best dapps in web3 right from inside your Safe WALLET.',
      buttons: [{ text: 'Get started', href: '#', variant: 'link' }],
    },
    component: ImageText,
  },
  {
    variant: 'image-text',
    image: <Image src={BatchTransactionsImage} alt="Batching transactions" />,
    textBlock: {
      title: (
        <>
          Save on gas by batching <b>multiple transactions</b> in a few clicks
        </>
      ),
      text: 'Easily batch transactions you want to make together to save on gas.',
      buttons: [{ text: 'Get started', href: '#', variant: 'link' }],
    },
    component: ImageText,
  },
  {
    variant: 'text-image',
    image: <Image src={SignerTypesImage} alt="Different wallet types" />,
    textBlock: {
      title: (
        <>
          Use <b>any type of signer</b> to control your account
        </>
      ),
      text: 'From hardware wallets like ledger, tresor, to metamask type externally owned accounts, use all of these as signers on your Safe WALLET.',
      buttons: [{ text: 'Get started', href: '#', variant: 'link' }],
    },
    component: ImageText,
  },
  {
    variant: 'image-text',
    image: <Image src={SimulateTransactionsImage} alt="Simulate transactions" />,
    textBlock: {
      title: (
        <>
          <b>Simulate transactions</b> before they happen
        </>
      ),
      text: 'Simulate your transactions before sending them through, right from the Safe’s UI. Get instant prompts and full analysis of your transaction’s success or failure with a simulation report on Tenderly.',
      buttons: [{ text: 'Get started', href: '#', variant: 'link' }],
    },
    component: ImageText,
  },
  {
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
    component: AvailableNetworks,
  },
  {
    variant: 'text-image',
    image: <Image src={PocketMultisigImage} alt="Safe mobile app" />,
    textBlock: {
      title: 'Convenience of multisig in your pocket',
      text: 'Track your assets and transactions on mobile. Stay informed on-the-go.',
      subBlock: <Stepper steps={convenienceContentSteps} />,
    },
    component: ImageText,
  },
  {
    title: 'Use Safe {WALLET} anywhere',
    text: 'Access your assets anywhere without compromising on security on our flagship interfaces built on Safe {Core}.',
    component: WalletDownload,
  },
]
