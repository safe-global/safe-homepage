import { useEffect, useState } from 'react'
import { ButtonBase, Container, Grid, Typography } from '@mui/material'
import RichText from '@/components/common/RichText'
import { isEntryTypeBaseBlock } from '@/lib/typeGuards'
import type { BaseBlockEntry } from '@/config/types'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import { extractContentfulImageProps } from '@/lib/contentful/extractContentfulImageProps'

const VerticalSlide = (props: BaseBlockEntry) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const { title, items } = props.fields

  const itemsList = items?.filter(isEntryTypeBaseBlock) ?? []
  const itemsImages = itemsList.map((item) => item.fields.image)

  const handleCardClick = (index: number) => {
    setSelectedIndex(index)
  }

  // Change index every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % itemsList.length)
    }, 5000)

    return () => clearInterval(interval) // Cleanup interval on component unmount
  }, [itemsList.length])

  const imageProps = extractContentfulImageProps(itemsImages[selectedIndex])

  return (
    <Container className={layoutCss.containerShort}>
      <div className={css.title}>
        <RichText {...title} />
      </div>

      <Grid container spacing="40px" justifyContent="flex-end">
        <Grid item md={7} className={css.imageItem}>
          <div className={css.imageWrapper}>
            {imageProps ? <img src={imageProps.src} alt={imageProps.alt} /> : null}
          </div>
        </Grid>

        <Grid item xs={12} md={5}>
          <div className={css.cardWrapper}>
            {itemsList.map((item, index) => {
              const { title, text } = item.fields

              return (
                <Grid item key={index} xs={12}>
                  <ButtonBase
                    onClick={() => handleCardClick(index)}
                    disableRipple
                    className={`${css.card} ${index === selectedIndex ? css.selected : ''}`}
                  >
                    <Typography variant="h5">
                      <RichText {...title} />
                    </Typography>

                    {text && (
                      <Typography color="primary.light" component="div">
                        <RichText {...text} />
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
