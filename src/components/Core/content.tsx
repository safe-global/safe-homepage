import AaStack from '@/components/Core/AaStack'
import Blob1Icon from '@/public/images/Core/blob-1.svg'
import Blob2Icon from '@/public/images/Core/blob-2.svg'
import Blob3Icon from '@/public/images/Core/blob-3.svg'

export const coreContent = [
  {
    title: 'The most complete and secure account abstraction stack',
    items: [
      {
        icon: <Blob1Icon />,
        title: 'Safe {CORE} AA SDK',
        text: 'Easily level up your application and empower your users with the most advanced account abstraction SDK. Cutting-edge functionality and the best UX.',
      },
      {
        icon: <Blob2Icon />,
        title: 'Safe {CORE} API',
        text: 'Easily level up your application and empower your users with the most advanced account abstraction SDK. Cutting-edge functionality and the best UX.',
      },
      {
        icon: <Blob3Icon />,
        title: 'Safe {CORE} PROTOCOL',
        text: 'Discover and contribute to a growing ecosystem of technological breakthroughs based on Safe with the Safe{Core} Protocol.',
      },
    ],
    component: AaStack,
  },
]
