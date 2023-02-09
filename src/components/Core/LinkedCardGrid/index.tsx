import { Container, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import type { BaseBlock } from '@/components/Home/types'
import ArrowIcon from '@/public/images/arrow-out-icon.svg'
import css from './styles.module.css'

const GridItem = ({ icon, title, text }: BaseBlock) => (
  <Grid
    item
    xs={12}
    md={4}
    className={css.card}
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    position="relative"
  >
    <a href="#" className={css.cardLink}>
      {icon}
      <div>
        <Typography variant="h4" mt={3} mb={1} color="text.primary">
          {title}
        </Typography>
        <Typography color="primary.light">{text}</Typography>
      </div>
      <ArrowIcon className={css.icon} />
    </a>
  </Grid>
)

export type LinkedCardGridProps = {
  title: string
  items: BaseBlock[]
}

const LinkedCardGrid = ({ title, items }: LinkedCardGridProps) => (
  <Container className={layoutCss.containerShort}>
    <Grid container className={layoutCss.containerShort} justifyContent="center">
      <Typography variant="caption" textAlign="center" component="div" mt="100px" mb={3}>
        {title}
      </Typography>
      <Grid container>
        {items.map((item, index) => (
          <GridItem key={index} {...item} />
        ))}
      </Grid>
    </Grid>
  </Container>
)

export default LinkedCardGrid
