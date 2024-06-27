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
        href: 'https://dune.com/queries/2459401/4044167',
      },
    },
    {
      title: 'Smart account landscape',
      image: {
        src: '/images/dune-icon-name-logo.png',
        alt: 'Dune Analytics logo',
      },
      link: {
        href: 'https://dune.com/queries/2459401/4044167',
      },
    },
  ],
}

const DuneBoards = () => {
  const { title, items } = data

  return <ExternalLinksGrid title={title} items={items} />
}

export default DuneBoards
