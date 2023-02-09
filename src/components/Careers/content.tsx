import { Intro } from './Intro'
import { Values } from './Values'
import { ImageText } from './ImageText'
import { Cards } from './Cards'
import UspBlock from '@/components/common/UspBlock'
import { Positions } from './Positions'
import { Application } from './Application'

export const careersContent = [
  {
    title: 'Impact the future of ownership',
    text: 'Our team is focused on a mission of unlocking ownership for the world. By building infrastructure that is robust and usable, we aim to fix some of web3’s biggest challenges.',
    link: {
      title: 'View positions',
      href: '#positions',
    },
    component: Intro,
  },
  {
    title: (
      <>
        <b>Our</b> values
      </>
    ),
    items: [
      {
        title: 'Grow sustainably',
        text: 'We have been building infrastructure since 2018 used widely and globally',
        items: [
          'We are in for the long haul',
          'We always grow our impact',
          'We prefer consistent over volatile',
          'We are wary of our effect on the environment',
          'We want the project to scale',
        ],
      },
      {
        title: 'Build for people',
        text: 'We are people focused within and outside the project',
        items: [
          'We put people at the centre (users, teams, stakeholders, community)',
          'We strive for accessibility and inclusiveness',
          'We provide meaningful opportunities for people',
          'We aim to have a positive impact on society',
          'We care about the stakeholders of our project',
        ],
      },
    ],
    component: Values,
  },
  {
    title: (
      <>
        <i>Safe</i> in the news
      </>
    ),
    items: [
      {
        header: <img src="/images/mirror.svg" alt="Mirror logo" />,
        title: 'A Call to Build Better Self-Custody',
        link: {
          title: 'Read more',
          href: '#',
        },
      },
      {
        header: <img src="/images/yahoo-finance.svg" alt="Yahoo Finance logo" />,
        title: 'Gnosis Safe rebrands to Safe, Raises $100M',
        link: {
          title: 'Read more',
          href: 'https://finance.yahoo.com/news/gnosis-safe-rebrands-safe-raises-130000225.html',
        },
      },
      {
        header: <img src="/images/decrypt.svg" alt="Decrypt logo" />,
        title: 'Gnosis Safe launches SafeDAO and Safe Token',
        link: {
          title: 'Read more',
          href: 'https://decrypt.co/110781/gnosis-safe-launches-safedao-safe-token',
        },
      },
    ],
    component: Cards,
  },
  {
    variant: '4-columns',
    title: 'Our benefits',
    text: 'Besides working on the bleeding edge of web3, we provide the best benefits to employees',
    items: [
      {
        image: {
          src: '/images/benefits/book-open.png',
          alt: 'Open book',
          width: '50px',
        },
        title: 'Learning & conferences',
        text: 'Personal education (1k€) and conference budgets (2k€) to help you grow.',
      },
      {
        image: {
          src: '/images/benefits/human-handsup.png',
          alt: 'Human with their hands up',
          width: '50px',
        },
        title: 'Dedicated hacking time ',
        text: 'Use your Friday afternoons for research or a side project in our ecosystem!',
      },
      {
        image: {
          src: '/images/benefits/coffee.png',
          alt: 'Coffee mug',
          width: '50px',
        },
        title: 'Company & team retreats',
        text: 'Connect with team mates outside of the office with cool trips and retreats.',
      },
      {
        image: {
          src: '/images/benefits/calendar.png',
          alt: 'Calendar',
          width: '50px',
        },
        title: 'Flexibility',
        text: 'Manage your own work schedules with hybrid working policies. ',
      },
      {
        image: {
          src: '/images/benefits/more-horizontal.png',
          alt: 'Three horizontal dots',
          width: '50px',
        },
        title: 'Flat hierarchies',
        text: 'Uncomplicated team structures and no barriers to  communication.',
      },
      {
        image: {
          src: '/images/benefits/device-laptop.png',
          alt: 'Laptop',
          width: '50px',
        },
        title: 'Newest technology',
        text: 'Work on the latest technology, equipment and web3 stack with dedicated budgets.',
      },
      {
        image: {
          src: '/images/benefits/gift.png',
          alt: 'Wrapped gift',
          width: '50px',
        },
        title: 'Token plan',
        text: 'Have a stake in our mission and shape the future of Safe  with a bonus token plan.',
      },
      {
        image: {
          src: '/images/benefits/map.png',
          alt: 'Map',
          width: '50px',
        },
        title: 'Relocation support',
        text: 'Join us in one of our offices with relocation help, visa support and allowances.',
      },
    ],
    component: UspBlock,
  },
  {
    caption: 'With contributors across the world, we have our main hubs in Europe and are expanding.',
    title: 'Our locations',
    image: {
      src: '/images/hub-locations.png',
      alt: 'International office locations',
    },
    component: ImageText,
  },
  {
    variant: 'reverse',
    title: 'Interview process',
    text: 'We have a transparent and fast interview process.',
    image: {
      src: '/images/interview-process.svg',
      alt: 'Interview process timeline',
    },
    component: ImageText,
  },
  {
    title: 'Open positions',
    component: Positions,
  },
  {
    component: Application,
    title: "Couldn't find what you were looking for?",
    text: 'Send us an initiative application!',
    link: {
      title: 'jobs@safe.global',
      href: 'mailto:jobs@safe.global',
    },
  },
]
