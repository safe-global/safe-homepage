import {Container, Divider, Grid, Typography} from '@mui/material'
import { type BaseBlock } from '@/components/Home/types'
import ItemGrid from '@/components/common/ItemGrid'
import AngleBracketsIcon from '@/public/images/Home/angle-brackets-icon.svg'
import layoutCss from '@/components/common/styles.module.css'
import Card from '@/components/HoldingCryptoSafely/Card'

type TextItemGridSpacedCardsProps = BaseBlock & {
    id: string;
    compactItems: BaseBlock['items'];
    columnWidth?: number;
    last?: boolean;
}

const TextItemGridSpacedCards = ({ id, title, text, items, compactItems, columnWidth, last }: TextItemGridSpacedCardsProps) => {
  return (
    <Container className={layoutCss.containerMedium} style={{marginTop: '80px'}} id={id}>
      <div style={{ maxWidth: '1045px', margin: '0' }}>
          <Typography variant="h3" textAlign="left">
            {title}
          </Typography>
          {text}
      </div>
      <ItemGrid items={compactItems} icon={<AngleBracketsIcon />} />

      <Grid container columnSpacing={2} rowGap="30px" mt={{ xs: '40px', md: '20px' }}>
        {items?.map(({ title, text = '', image }, index) => {
          if ( !title ) return null

          return (
            <Grid key={index} item xs={12} md={columnWidth}>
              <Card title={title} text={text} image={image} />
            </Grid>
          )
        })}
      </Grid>

        {last && <Divider sx={{ mt: 10 }} />}
    </Container>
  )
}

export default TextItemGridSpacedCards
