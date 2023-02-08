import { Typography } from '@mui/material'
import { useMemo } from 'react'
import type { ComponentProps, ReactElement } from 'react'

import PinIcon from '@/public/images/pin.svg'
import { Cards } from '@/components/Careers/Cards'
import type { CardProps } from '@/components/Careers/Cards'
import type { Position } from '@/hooks/useOpenPositions'

import css from './styles.module.css'

const parsePosition = ({ url, location, name }: Position): CardProps => {
  return {
    title: name,
    link: { href: url, title: 'See position' },
    header: (
      <Typography variant="caption" className={css.header}>
        <PinIcon className={css.icon} />
        {location.name}
      </Typography>
    ),
  }
}

export const Positions = ({
  positions,
  items: _items,
  ...rest
}: ComponentProps<typeof Cards> & { positions: Position[] }): ReactElement => {
  const items = useMemo(() => {
    if (positions.length === 0) {
      return []
    }

    return positions.map(parsePosition)
  }, [positions])

  return <Cards items={items} {...rest} />
}
