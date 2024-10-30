import { useEffect, useState } from 'react'
import { ButtonBase, Container, Grid, Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import BracketLeft from '@/public/images/Wallet/VerticalSlide/bracket-left.svg'
import RecoveryIcon from '@/public/images/Wallet/VerticalSlide/recovery.svg'
import ScanIcon from '@/public/images/Wallet/VerticalSlide/scan.svg'
import MultipleKeysIcon from '@/public/images/Wallet/VerticalSlide/multiple-keys.svg'
import BracketRight from '@/public/images/Wallet/VerticalSlide/bracket-right.svg'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

const icons = [<RecoveryIcon key="recovery" />, <ScanIcon key="scan" />, <MultipleKeysIcon key="multiple-keys" />]

const VerticalSlide = ({ title, items = [] }: BaseBlock) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const itemsImages = items.map((item) => item.image)
  const selectedImage = itemsImages[selectedIndex]

  const handleCardClick = (index: number) => {
    setSelectedIndex(index)
  }

  // Change index every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % items?.length)
    }, 5000)

    return () => clearInterval(interval) // Cleanup interval on component unmount
  }, [items.length])

  return (
    <Container className={layoutCss.containerShort}>
      <Typography variant="h2" className={css.title}>
        {title}
      </Typography>

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
    </Container>
  )
}

export default VerticalSlide
