import { useEffect, useState, type ReactElement, type RefObject } from 'react'
import { Grid, Typography } from '@mui/material'
import useScrollProgress from '@/hooks/useScrollProgress'
import { selectIndex } from '@/lib/Wallet/selectIndex'
import type { BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'

export const GridItem = ({
  image,
  title,
  text,
  isSelected,
}: Partial<BaseBlock> & { isSelected: boolean }): ReactElement => (
  <Grid item xs={12} className={`${css.card} ${isSelected ? css.selected : ''}`}>
    {image ? <img {...image} /> : null}

    <Typography variant="h5">{title}</Typography>

    {text && (
      <Typography color="primary.light" component="div">
        {text}
      </Typography>
    )}
  </Grid>
)

const Table = ({ items = [], sectionRef }: { items: BaseBlock['items']; sectionRef: RefObject<HTMLDivElement> }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { scrollYProgress } = useScrollProgress(sectionRef)

  useEffect(() => {
    const handleScroll = () => {
      const newIndex = selectIndex(scrollYProgress.get())
      setSelectedIndex(newIndex)
    }

    const unsubscribe = scrollYProgress.on('change', handleScroll)

    return () => {
      unsubscribe()
    }
  }, [scrollYProgress, items.length])

  return (
    <div className={css.cardWrapper}>
      {items.map((item, index) => (
        <GridItem key={index} isSelected={index === selectedIndex} {...item} />
      ))}
    </div>
  )
}

export default Table
