import { Grid, Typography } from '@mui/material'
import ExternalLinkCard from '@/components/common/Cards/ExternalLinkCard'
import { type BaseBlock } from '@/components/Home/types'

const ExternalLinksGrid = ({ title, items }: Pick<BaseBlock, 'title' | 'items'>) => (
  <Grid container>
    <Grid item sm={4}>
      <Typography variant="h3">{title}</Typography>
    </Grid>

    <Grid container item sm={8} columnSpacing={4}>
      {items?.map((item) => {
        const { title = '', image, link } = item

        return (
          <Grid item sm={6} key={item.link?.href}>
            <ExternalLinkCard title={title} image={image} link={link} />
          </Grid>
        )
      })}
    </Grid>
  </Grid>
)

export default ExternalLinksGrid
