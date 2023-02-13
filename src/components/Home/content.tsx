import Intro from '@/components/Home/Intro'
import Stats from '@/components/Home/Stats'
import TitleLogos from '@/components/Home/TitleLogos'
import BigIconsCardGrid from '@/components/Home/BigIconsCardGrid'
import Networks from '@/components/common/Networks'
import BannerTextCard from '@/components/Home/BannerTextCard'
import ImageParalaxText from '@/components/Home/ImageParalaxText'
import TitleTextLinkedCardGrid from '@/components/Home/TitleTextLinkedCardGrid'
import TitleButton from '@/components/Home/TitleButton'
import TextBlockBanner from '@/components/common/TextBlockBanner'

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
    component: Stats,
  },
  {
    title: 'Supported Networks',
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
          name: 'Gnosis Chain',
          icon: {
            src: '/images/chainsLogos/GnosisChainLogo.png',
            alt: 'Gnosis Chain logo',
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
        {
          name: 'Ethereum Mainnet',
          icon: {
            src: '/images/chainsLogos/EthereumLogo.png',
            alt: 'Ethereum logo',
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
          name: 'Aurora',
          icon: {
            src: '/images/chainsLogos/AuroraLogo.png',
            alt: 'Aurora logo',
          },
        },
      ],
    ],
    component: Networks,
  },
  {
    title: (
      <>
        Trusted by the best in <b>Web3</b>
      </>
    ),
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
    component: TitleLogos,
  },
  {
    items: [
      {
        caption: 'Developers',
        title: (
          <>
            Build on the <i>Safest</i> account abstraction stack
          </>
        ),
        text: {
          src: '/images/safe-core-type.svg',
          alt: 'Safe Core green background',
        },
        icon: {
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
        text: {
          src: '/images/safe-wallet-type.svg',
          alt: 'Safe Wallet green background',
        },
        icon: {
          src: '/images/lock.svg',
          alt: 'Padlock',
        },
        link: {
          title: 'Learn more',
          href: '#',
        },
      },
    ],
    component: BigIconsCardGrid,
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
    component: BannerTextCard,
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
    component: ImageParalaxText,
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
    component: TitleTextLinkedCardGrid,
  },
  {
    title: 'Want ot reach the core team members?',
    text: '',
    link: {
      title: 'Contact us',
      href: '#',
    },
    component: TitleButton,
  },
  {
    title: 'Use Safe {WALLET} anywhere',
    text: 'Access your assets anywhere without compromising on security on our flagship interfaces built on Safe {Core}.',
    component: TextBlockBanner,
  },
]
