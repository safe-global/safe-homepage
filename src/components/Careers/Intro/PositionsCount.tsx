import { Chip } from '@mui/material'
import { useOpenPositions } from '@/hooks/useOpenPositions'

const PositionsCount = ({ href, className }: { href: string; className: string }) => {
  const { data: positions = [] } = useOpenPositions()

  return (
    <Chip
      label={`${positions.length} open position${positions.length === 1 ? '' : 's'}`}
      variant="outlined"
      color="primary"
      className={className}
      sx={({ typography }) => typography.caption}
      clickable
      component="a"
      href={href}
    />
  )
}

export default PositionsCount
