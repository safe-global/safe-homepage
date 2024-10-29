import { Container, Grid } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import getComponentByName from '@/lib/getComponentByName'

const BigCardsGrid = ({ items }: { items: Array<BaseBlock['items'] & { component: string }> }) => {
  if (!items || !items.length) return null

  return (
    <Container className={layoutCss.containerShort}>
      <Grid container spacing={{ xs: '30px', xl: '50px' }}>
        {items?.map((item, index) => {
          const { component } = item

          const CardComponent = getComponentByName(component, () => <></>)

          return (
            <Grid key={index} item xs={12} md={6}>
              <CardComponent {...item} />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}

export default BigCardsGrid
