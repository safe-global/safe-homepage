import LinkedCardGrid from '@/components/Core/LinkedCardGrid'
import TextGrid from '@/components/Core/TextGrid'

export const coreContent = [
  {
    title: 'The most complete and secure account abstraction stack',
    items: [
      {
        icon: {
          src: '/images/Core/blob-1.svg',
          alt: 'Safe blob 1',
        },
        title: 'Safe {CORE} AA SDK',
        text: 'Easily level up your application and empower your users with the most advanced account abstraction SDK. Cutting-edge functionality and the best UX.',
      },
      {
        icon: {
          src: '/images/Core/blob-2.svg',
          alt: 'Safe blob 2',
        },
        title: 'Safe {CORE} API',
        text: 'Easily level up your application and empower your users with the most advanced account abstraction SDK. Cutting-edge functionality and the best UX.',
      },
      {
        icon: {
          src: '/images/Core/blob-3.svg',
          alt: 'Safe blob 3',
        },
        title: 'Safe {CORE} PROTOCOL',
        text: 'Discover and contribute to a growing ecosystem of technological breakthroughs based on Safe with the Safe{Core} Protocol.',
      },
    ],
    component: LinkedCardGrid,
  },
  {
    textBlock: {
      caption: 'Safe core protocol',
      title: 'Unlock more from Safe with the Safe {Core} Protocol',
      text: 'Tap into the ecosystem&apos;s cutting-edge plug-ins or write your own custom logic to plug into the Safe core contracts.',
      link: { text: 'Get started', href: '#' },
    },
    image: {
      src: '/images/Core/safe-core-protocol.png',
      alt: 'Safe core protocol',
    },
    grid: {
      title: 'Benefits',
      items: [
        {
          text: 'Improve UX of your product with account abstraction',
        },
        {
          text: 'Customize access control to Safe accounts',
        },
        {
          text: 'Build on battle tested  security',
        },
        {
          text: 'Build any use case by extending the on-chain logic of core contracts',
        },
      ],
    },
    component: TextGrid,
  },
]
