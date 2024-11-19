import { type RefObject, useEffect, useState } from 'react'
import { ButtonBase, Grid, Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import BracketLeft from '@/public/images/Wallet/VerticalSlide/bracket-left.svg'
import RecoveryIcon from '@/public/images/Wallet/VerticalSlide/recovery.svg'
import ScanIcon from '@/public/images/Wallet/VerticalSlide/scan.svg'
import MultipleKeysIcon from '@/public/images/Wallet/VerticalSlide/multiple-keys.svg'
import BracketRight from '@/public/images/Wallet/VerticalSlide/bracket-right.svg'
import css from './styles.module.css'
import useScrollProgress from '@/hooks/useScrollProgress'
import { selectIndex } from '@/lib/Wallet/selectIndex'

const icons = [<RecoveryIcon key="recovery" />, <ScanIcon key="scan" />, <MultipleKeysIcon key="multiple-keys" />]

const indexToScrollProgress = (index: number) => {
  if (index === 0) {
    return 0.1
  } else if (index === 1) {
    return 0.4
  } else {
    return 0.5
  }
}

const Table = ({ items = [], sectionRef }: { items: BaseBlock['items']; sectionRef: RefObject<HTMLDivElement> }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { scrollYProgress } = useScrollProgress(sectionRef)

  const itemsImages = items.map((item) => item.image)
  const selectedImage = itemsImages[selectedIndex]

  const handleCardClick = (index: number) => {
    setSelectedIndex(index)

    // Move the scroll to the selected index according to indexToScrollProgress function
    if (sectionRef.current) {
      const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY
      const sectionHeight = sectionRef.current.scrollHeight

      const offset = indexToScrollProgress(index) * sectionHeight

      window.scrollTo({ top: sectionTop + offset, behavior: 'instant' })
    }
  }

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
    <Grid container spacing="40px" justifyContent="flex-end">
      <Grid item md={7} className={css.imageItem}>
        <div className={css.showInMd}>
          <BracketLeft />
          {icons.map((icon, index) => (
            <span key={index} className={index === selectedIndex ? css.selected : undefined}>
              {icon}
            </span>
          ))}
          <BracketRight />
        </div>

        {selectedImage ? <img src={selectedImage.src} alt={selectedImage.alt} className={css.image} /> : null}
      </Grid>

      <Grid item xs={12} md={5}>
        <div className={css.cardWrapper}>
          {items.map((item, index) => {
            const { title, text } = item

            return (
              <Grid item key={index} xs={12}>
                <ButtonBase
                  onClick={() => handleCardClick(index)}
                  disableRipple
                  className={`${css.card} ${index === selectedIndex ? css.selected : ''}`}
                >
                  <Typography variant="h5">{title}</Typography>

                  {text && (
                    <Typography color="primary.light" component="div">
                      {text}
                    </Typography>
                  )}
                </ButtonBase>
              </Grid>
            )
          })}
        </div>
      </Grid>
    </Grid>
  )
}

export default Table
