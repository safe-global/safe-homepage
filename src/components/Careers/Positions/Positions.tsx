import { Typography } from '@mui/material'
import { useMemo } from 'react'
import type { ComponentProps, ReactElement } from 'react'

import PinIcon from '@/public/images/pin.svg'
import { Cards } from '@/components/Careers/Cards'
import { useOpenPositions } from '@/hooks/useOpenPositions'
import type { Position } from '@/hooks/useOpenPositions'
import type { CardProps } from '@/components/common/LinkCard'

import css from './styles.module.css'

const parsePosition = ({ jobUrl, location, title }: Position): CardProps => {
  return {
    title,
    link: {
      href: jobUrl,
      title: 'See position',
    },
    icon: (
      <Typography variant="caption" className={css.header}>
        <PinIcon className={css.icon} />
        {location}
      </Typography>
    ),
    highlight: true,
  }
}

export const Positions = ({ items: _items, ...rest }: ComponentProps<typeof Cards>): ReactElement => {
  const { data: positions = [] } = useOpenPositions()

  const items = useMemo(() => {
    if (positions.length === 0) {
      return []
    }

    return positions.map(parsePosition)
  }, [positions])

  return <Cards items={items} {...rest} />
}

export default Positions
