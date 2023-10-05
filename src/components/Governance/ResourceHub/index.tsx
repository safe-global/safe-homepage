import type { BaseBlock } from '@/components/Home/types'
import HeaderCTA from '@/components/common/HeaderCTA'
import { GridItem } from '@/components/common/UspBlock'
import { Container, Grid } from '@mui/material'
import css from './styles.module.css'
import layoutCss from '@/components/common/styles.module.css'

const ResourceHub = ({ items, ...props }: BaseBlock) => {
  return (
    <Container className={layoutCss.containerShort}>
      <HeaderCTA {...props} />

      {/* TODO: replace element after refactoring UspBlock/ItemGrid */}
      <Grid container className={css.gridContainer}>
        {items?.map((item, index) => (
          <GridItem key={index} width={4} {...item} />
        ))}
      </Grid>
    </Container>
  )
}

export default ResourceHub
