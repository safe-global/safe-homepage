import HeroSection from '@/components/Wallet/Hero'
import UspBlock from '@/components/common/UspBlock'
import ImageText from '@/components/Wallet/ImageText'
import Networks from '@/components/common/Networks'
import TextBlockBanner from '@/components/common/TextBlockBanner'
import TextStepperBlockImage from '@/components/Wallet/TextStepperBlockImage'
import TextRadialAnimation from '@/components/Wallet/TextRadialAnimation'
import OwnershipParallax from '@/components/Wallet/OwnershipParallax'
import ParallaxAppStore from '@/components/Wallet/ParallaxAppStore'
import ParallaxBatching from '@/components/Wallet/ParallaxBatching'
import ParallaxTxSimulation from '@/components/Wallet/ParallaxTxSimulation'

export const walletContent = [
  {
    image: {
      src: '/images/Wallet/clients.png',
      alt: 'Web and mobile clients',
    },
    textBlock: {
      title: 'The most secure way to own assets',
      button: { text: 'Launch wallet', href: 'https://app.safe.global' },
    },
    component: HeroSection,
  },
  {
    variant: '3-columns',
    title: 'Your keys. Your coins.',
    items: [
      {
        image: {
          src: '/images/Wallet/shield.svg',
          alt: 'Shield with a checkmark',
        },
        title: 'Battle Tested Security',
        text: 'Top notch security and custom access control for you and for your users.',
      },
      {
        image: {
          src: '/images/Wallet/people.svg',
          alt: 'Group of owners',
        },
        title: 'Co-ownership',
        text: 'Multi-sig based trustless group ownership ownership and asset co-ordination.',
      },
      {
        image: {
          src: '/images/Wallet/key.svg',
          alt: 'Ownership key',
        },
        title: 'Self-custody',
        text: 'We never own any of the assets stored in user accounts. We never will.',
      },
    ],
    component: UspBlock,
  },
  {
    title: (
      <>
        <b>Co-manage</b> your assets
      </>
    ),
    text: 'With multiple private keys, the same account can be jointly managed by several users enabling co-ownership that powers DAOs, groups and enterprises.',
    link: {
      title: 'Get started',
      href: '#',
    },
    component: TextRadialAnimation,
  },
  {
    variant: 'image-text',
    textBlock: {
      title: (
        <>
          <b>Control and change account</b> ownership
        </>
      ),
      text: 'Add new signers, remove signers and replace ownership by simply changing the private key(s) that control the account.',
      buttons: [{ text: 'Get started', href: '#', variant: 'link' }],
    },
    component: OwnershipParallax,
  },
  {
    variant: 'text-image',
    image: {
      src: '/images/Wallet/safe-apps-store.png',
      alt: 'Transactions require confirmations from owners',
    },
    textBlock: {
      title: 'Built-in app store',
      text: 'Use the best dapps in web3 right from inside your Safe WALLET.',
      buttons: [{ text: 'Get started', href: '#', variant: 'link' }],
    },
    component: ParallaxAppStore,
  },
  {
    variant: 'image-text',
    image: {
      src: '/images/Wallet/batch-transactions.png',
      alt: 'Batching transactions',
    },
    textBlock: {
      title: (
        <>
          Save on gas by batching <b>multiple transactions</b> in a few clicks
        </>
      ),
      text: 'Easily batch transactions you want to make together to save on gas.',
      buttons: [{ text: 'Get started', href: '#', variant: 'link' }],
    },
    component: ParallaxBatching,
  },
  {
    variant: 'text-image',
    image: {
      src: '/images/Wallet/signer-types.png',
      alt: 'Different wallet types',
    },
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
    image: {
      src: '/images/Wallet/simulate-transactions.png',
      alt: 'Simulate transactions in Tenderly',
    },
    textBlock: {
      title: (
        <>
          <b>Simulate transactions</b> before they happen
        </>
      ),
      text: 'Simulate your transactions before sending them through, right from the Safe’s UI. Get instant prompts and full analysis of your transaction’s success or failure with a simulation report on Tenderly.',
      buttons: [{ text: 'Get started', href: '#', variant: 'link' }],
    },
    component: ParallaxTxSimulation,
  },
  {
    title: 'Available on 10+ networks',
    text: 'And more networks, including testnets.',
    networks: [
      [
        {
          name: 'Ethereum Mainnet',
          icon: {
            src: '/images/chainsLogos/EthereumLogo.png',
            alt: 'Ethereum logo',
          },
        },
        {
          name: 'BNB Smart Chain',
          icon: {
            src: '/images/chainsLogos/BNBLogo.png',
            alt: 'BNB Chain logo',
          },
        },
        {
          name: 'Optimism',
          icon: {
            src: '/images/chainsLogos/OptimismLogo.png',
            alt: 'Optimism logo',
          },
        },
        {
          name: 'Arbitrum',
          icon: {
            src: '/images/chainsLogos/ArbitrumLogo.png',
            alt: 'Arbitrum logo',
          },
        },
        {
          name: 'Polygon',
          icon: {
            src: '/images/chainsLogos/PolygonLogo.png',
            alt: 'Polygon logo',
          },
        },
        {
          name: 'Avalanche',
          icon: {
            src: '/images/chainsLogos/AvalancheLogo.png',
            alt: 'Avalanche logo',
          },
        },
        {
          name: 'Gnosis Chain',
          icon: {
            src: '/images/chainsLogos/GnosisChainLogo.png',
            alt: 'Gnosis Chain logo',
          },
        },
      ],
      [
        {
          name: 'Avalanche',
          icon: {
            src: '/images/chainsLogos/AvalancheLogo.png',
            alt: 'Avalanche logo',
          },
        },
        {
          name: 'Polygon',
          icon: {
            src: '/images/chainsLogos/PolygonLogo.png',
            alt: 'Polygon logo',
          },
        },
        {
          name: 'Gnosis Chain',
          icon: {
            src: '/images/chainsLogos/GnosisChainLogo.png',
            alt: 'Gnosis Chain logo',
          },
        },
        {
          name: 'Aurora',
          icon: {
            src: '/images/chainsLogos/AuroraLogo.png',
            alt: 'Aurora logo',
          },
        },
        {
          name: 'Ethereum Mainnet',
          icon: {
            src: '/images/chainsLogos/EthereumLogo.png',
            alt: 'Ethereum logo',
          },
        },
        {
          name: 'Optimism',
          icon: {
            src: '/images/chainsLogos/OptimismLogo.png',
            alt: 'Optimism logo',
          },
        },
        {
          name: 'BNB Smart Chain',
          icon: {
            src: '/images/chainsLogos/BNBLogo.png',
            alt: 'BNB Chain logo',
          },
        },
      ],
    ],
    component: Networks,
  },
  {
    variant: 'text-image',
    image: {
      src: '/images/Wallet/pocket-multisig.png',
      alt: 'Safe mobile app',
    },
    textBlock: {
      title: 'Convenience of multisig in your pocket',
      text: 'Track your assets and transactions on mobile. Stay informed on-the-go.',
      steps: [
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
      ],
    },
    component: TextStepperBlockImage,
  },
  {
    component: TextBlockBanner,
  },
]
