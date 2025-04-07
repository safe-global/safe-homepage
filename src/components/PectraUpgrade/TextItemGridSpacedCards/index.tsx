import { Container, Divider, Grid, Typography } from '@mui/material'
import { type BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import Card from '@/components/PectraUpgrade/Card'
import css from './styles.module.css'

type TextItemGridSpacedCardsProps = BaseBlock & {
  id: string
  columnWidth?: number
  last?: boolean
  divider?: boolean
  items: {
    items: {
      title: string
      text: string
    }[]
  }[]
}

const TextItemGridSpacedCards = ({
  id,
  title,
  text,
  items,
  columnWidth,
  last,
  divider,
}: TextItemGridSpacedCardsProps) => {
  return (
    <Container className={layoutCss.containerMedium} style={{ marginTop: '80px' }} id={id}>
      <div style={{ maxWidth: '1045px', margin: '0' }}>
        <Typography variant="h3" textAlign="left">
          {title}
        </Typography>
        {text}
      </div>
      <Grid container columnSpacing={2} rowGap="30px" mt={{ xs: '40px', md: '20px' }} className={css.newGridContainer}>
        {items?.map((item, outerIndex) => (
          <Grid key={outerIndex} container mt={{ xs: 3, md: 7 }}>
            {item.items?.map((subitem, index) => (
              <Grid key={index} item xs={12} md={columnWidth}>
                <Card title={subitem.title} text={subitem.text} />
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>

      {(last || divider) && <Divider sx={{ mt: 10 }} />}
    </Container>
  )
}

export default TextItemGridSpacedCards
