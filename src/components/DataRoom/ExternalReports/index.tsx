import ExternalLinksGrid from '@/components/DataRoom/ExternalLinksGrid'
import { type BaseBlock } from '@/components/Home/types'

// TODO: links need to be replaced
const data: BaseBlock = {
  title: 'External Reports',
  text: 'dummy',
  items: [
    {
      title: 'Messari Q4 2023',
      image: {
        src: '/images/messari-logo.png',
        alt: 'Dune Analytics logo',
      },
      link: {
        href: 'https://dune.com/safe/all',
      },
    },
    {
      title: 'Messari Q1 2024',
      image: {
        src: '/images/messari-logo.png',
        alt: 'Messari logo',
      },
      link: {
        href: 'https://dune.com/safe/smart-accounts',
      },
    },
    {
      title: 'Nansen Report',
      image: {
        src: '/images/nansen-logo.png',
        alt: 'Nansen logo',
      },
      link: {
        href: 'https://dune.com/safe/all',
      },
    },
    {
      title: 'Greenfield One Thesis Post',
      image: {
        src: '/images/green-field-logo.png',
        alt: 'Greenfield logo',
      },
      link: {
        href: 'https://dune.com/safe/smart-accounts',
      },
    },
    {
      title: '1kx Thesis Post',
      image: {
        src: '/images/1kx-logo.png',
        alt: '1kx logo',
      },
      link: {
        href: 'https://dune.com/safe/all',
      },
    },
  ],
}

const ExternalReports = () => {
  const { title, items } = data

  return <ExternalLinksGrid title={title} items={items} />
}

export default ExternalReports
