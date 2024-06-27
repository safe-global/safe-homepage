import ExternalLinksGrid from '@/components/DataRoom/ExternalLinksGrid'
import { type BaseBlock } from '@/components/Home/types'

const data: BaseBlock = {
  title: 'Dune Boards',
  text: 'dummy',
  items: [
    {
      title: 'Safe on All chains',
      image: {
        src: '/images/dune-icon-name-logo.png',
        alt: 'Dune Analytics logo',
      },
      link: {
        href: 'https://dune.com/safe/all',
      },
    },
    {
      title: 'Smart account landscape',
      image: {
        src: '/images/dune-icon-name-logo.png',
        alt: 'Dune Analytics logo',
      },
      link: {
        href: 'https://dune.com/safe/smart-accounts',
      },
    },
  ],
}

const DuneBoards = () => {
  const { title, items } = data

  return <ExternalLinksGrid title={title} items={items} />
}

export default DuneBoards
