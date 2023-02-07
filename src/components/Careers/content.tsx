import { Intro } from './Intro'
import { Values } from './Values'

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
]
