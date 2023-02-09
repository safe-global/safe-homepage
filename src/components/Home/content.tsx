import SafeCoreImage from '@/public/images/safe-core-type.svg'
import SafeWalletImage from '@/public/images/safe-wallet-type.svg'

import Intro from '@/components/Home/Intro'
import Community from '@/components/Home/Community'
import TrustedBy from '@/components/Home/TrustedBy'
import SafeCoreWallet from '@/components/Home/SafeCoreWallet'
import Networks from '@/components/Home/Networks'
import Ecosystem from '@/components/Home/Ecosystem'
import Security from '@/components/Home/Security'
import Governance from '@/components/Home/Governance'
import Contact from '@/components/Home/Contact'
import WalletDownload from '@/components/common/WalletDownload'

export const homeContent = [
  {
    title: 'Unlock Digital Asset Ownership.',
    text: 'Safe is the most trusted decentralized custody protocol and collective asset management platform on Ethereum.',
    component: Intro,
  },
  {
    caption: 'Safe at scale',
    title: (
      <>
        <i>Safe</i> accounts hold and protect billions of $$$ in assets on EVM.
      </>
    ),
    text: 'Previously called Gnosis Safe, Safe spun out with a mission to build a better standard for ownership with smart contract accounts. Since 2018, Safe has grown to several EVM chains.',
    items: [
      {
        title: '14M+',
        text: 'Total transactions',
      },
      {
        title: '$36B+',
        text: 'Total assets stored',
      },
      {
        title: '1M',
        text: 'Safe accounts deployed',
      },
    ],
    component: Community,
  },
  {
    title: (
      <>
        Trusted by the best in <b>Web3</b>
      </>
    ),
    text: '',
    items: [
      {
        image: {
          src: '/images/1inch.svg',
          alt: '1inch',
        },
      },
      {
        image: {
          src: '/images/maker.svg',
          alt: 'MakerDAO',
        },
      },
      {
        image: {
          src: '/images/ens.svg',
          alt: 'Ethereum Name Service',
        },
      },
      {
        image: {
          src: '/images/zapper.svg',
          alt: 'Zapper',
        },
      },
      {
        image: {
          src: '/images/aave.svg',
          alt: 'Aave',
        },
      },
      {
        image: {
          src: '/images/balancer.svg',
          alt: 'Balancer DeFi',
        },
      },
      {
        image: {
          src: '/images/vitalik.png',
          alt: 'Vitalik',
        },
      },
      {
        image: {
          src: '/images/punk.png',
          alt: 'Punk 6529',
        },
      },
      {
        image: {
          src: '/images/adidas.svg',
          alt: 'Adidas',
        },
      },
      {
        image: {
          src: '/images/kpmg.svg',
          alt: 'KPMG International Limited',
        },
      },
      {
        image: {
          src: '/images/stripe.svg',
          alt: 'Stripe',
        },
      },
    ],
    component: TrustedBy,
  },
  {
    title: 'Supported Networks',
    text: 'And more networks, including testnets.',
    items: [
      {
        image: {
          src: '/images/networks/mainnet.svg',
          alt: 'Mainnet',
        },
      },
      {
        image: {
          src: '/images/networks/bnb.svg',
          alt: 'Binance Smart Chain',
        },
      },
      {
        image: {
          src: '/images/networks/optimism.svg',
          alt: 'Optimism',
        },
      },
      {
        image: {
          src: '/images/networks/arbitrum.svg',
          alt: 'Arbitrum',
        },
      },
      {
        image: {
          src: '/images/networks/polygon.svg',
          alt: 'Polygon',
        },
      },
      {
        image: {
          src: '/images/networks/avalanche.svg',
          alt: 'Avalanche',
        },
      },
      {
        image: {
          src: '/images/networks/gnosischain.svg',
          alt: 'Gnosis Chain',
        },
      },
      {
        image: {
          src: '/images/networks/aurora.svg',
          alt: 'Aurora',
        },
      },
    ],
    component: Networks,
  },
  {
    title: '',
    text: '',
    items: [
      {
        caption: 'Developers',
        title: (
          <>
            Build on the <i>Safest</i> account abstraction stack
          </>
        ),
        text: <SafeCoreImage />,
        image: {
          src: '/images/code.svg',
          alt: 'Greater than sign, forward slash, less than sign',
        },
        link: {
          title: 'Learn more',
          href: '#',
        },
      },
      {
        caption: 'Users',
        title: (
          <>
            Use the most secure
            <br />
            multi-sig wallet in web3
          </>
        ),
        text: <SafeWalletImage />,
        image: {
          src: '/images/lock.svg',
          alt: 'Padlock',
        },
        link: {
          title: 'Learn more',
          href: '#',
        },
      },
    ],
    component: SafeCoreWallet,
  },
  {
    title: (
      <>
        Safe {'{CORE} '}
        <b>powers ecosystem projects</b>
        <br />
        in every corner of web3
      </>
    ),
    text: '130+ projects including DAO tools, DeFi, NFT collectives are building on Safe Core.',
    component: Ecosystem,
  },
  {
    caption: 'Security',
    title: (
      <>
        Our contracts are
        <br />
        <b>
          the most
          <br />
          battle-tested
        </b>
      </>
    ),
    text: 'The SafeCORE smart contracts have passed the highest possible security standard in the industry: Formal Verification.',
    link: {
      title: 'Read report',
      href: '#',
    },
    component: Security,
  },
  {
    caption: 'Governance',
    title: (
      <>
        SafeDAO <b>governs</b> the future of <i>Safe</i>
      </>
    ),
    text: 'The Safe is governed by SafeDAO, a decentralized  collective of core contributors, backers, GnosisDAO, users and ecosystem contributors i.e. Safe Guardians.',
    items: [
      {
        title: 'Forum',
        caption: 'Be a part of community',
        link: {
          href: '#',
        },
      },
      {
        title: (
          <>
            Latest
            <br />
            Proposals
          </>
        ),
        caption: 'Follow DAO decisions',
        link: {
          href: '#',
        },
      },
      {
        title: (
          <>
            Safe
            <br />
            Guardians
          </>
        ),
        caption: 'Shape our future',
        link: {
          href: '#',
        },
      },
    ],
    component: Governance,
  },
  {
    title: 'Want ot reach the core team members?',
    text: '',
    link: {
      title: 'Contact us',
      href: '#',
    },
    component: Contact,
  },
  {
    title: 'Use Safe {WALLET} anywhere',
    text: 'Access your assets anywhere without compromising on security on our flagship interfaces built on Safe {Core}.',
    component: WalletDownload,
  },
]
