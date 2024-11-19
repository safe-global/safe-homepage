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

const icons = [<RecoveryIcon key="recovery" />, <ScanIcon key="scan" />, <MultipleKeysIcon key="multiple-keys" />]

// TODO: move to utils
export const selectIndex = (scrollYProgress: number) => {
  if (scrollYProgress >= 0 && scrollYProgress <= 0.4) {
    return 0
  } else if (scrollYProgress > 0.4 && scrollYProgress <= 0.6) {
    return 1
  } else {
    return 2
  }
}

const Table = ({ items = [], sectionRef }: { items: BaseBlock['items']; sectionRef: RefObject<HTMLDivElement> }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { scrollYProgress } = useScrollProgress(sectionRef)

  const itemsImages = items.map((item) => item.image)
  const selectedImage = itemsImages[selectedIndex]

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
                <ButtonBase disableRipple className={`${css.card} ${index === selectedIndex ? css.selected : ''}`}>
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
