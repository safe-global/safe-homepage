import { Container, Grid, Typography } from '@mui/material'
import RichText from '@/components/common/RichText'
import Card from '@/components/Foundry/POCs/Card'
import { type BaseBlockEntry } from '@/config/types'
import { isEntryTypeBaseBlock } from '@/lib/typeGuards'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

const POCs = (props: BaseBlockEntry) => {
  const { caption, title, text, items } = props.fields

  const itemsList = items?.filter(isEntryTypeBaseBlock) || []

  return (
    <Container className={`${layoutCss.containerShort} ${layoutCss.centeredContent}`}>
      <div className={css.title}>
        <RichText {...title} />
      </div>

      {text && (
        <div className={css.text}>
          <RichText {...text} />
        </div>
      )}

      <Grid container columnSpacing={2} rowGap="30px" mt={{ xs: '40px', md: '80px' }} className={css.gridContainer}>
        {itemsList.map((item, index) => (
          <Grid key={index} item xs={12} md={5} height="100%">
            <Card key={item.fields.caption} {...item} />
          </Grid>
        ))}
      </Grid>

      <Typography mt="80px">{caption}</Typography>
    </Container>
  )
}

export default POCs
