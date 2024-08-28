import { Container, Grid } from '@mui/material'
import { isEntryTypeBaseBlock } from '@/lib/typeGuards'
import type { BaseBlockEntry } from '@/config/types'
import layoutCss from '@/components/common/styles.module.css'
import getComponentByName from '@/lib/getComponentByName'

const BigCardsGrid = (props: BaseBlockEntry) => {
  const { items } = props.fields

  const itemsList = items?.filter(isEntryTypeBaseBlock) ?? []

  return (
    <Container className={layoutCss.containerShort}>
      <Grid container spacing={{ xs: '30px', xl: '50px' }}>
        {itemsList.map((item, index) => {
          const { component } = item.fields

          const CardComponent = getComponentByName(`${component}`, () => <></>)

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
