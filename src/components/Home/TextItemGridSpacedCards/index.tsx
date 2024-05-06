import { Container, Grid, Typography } from '@mui/material'
import { type BaseBlock } from '@/components/Home/types'
import ItemGrid from '@/components/common/ItemGrid'
import AngleBracketsIcon from '@/public/images/Home/angle-brackets-icon.svg'
import layoutCss from '@/components/common/styles.module.css'
import LinkCard from '@/components/Home/LinkCard'

type TextItemGridSpacedCardsProps = BaseBlock & { compactItems: BaseBlock['items'] }

const TextItemGridSpacedCards = ({ title, items, compactItems }: TextItemGridSpacedCardsProps) => {
  return (
    <Container className={layoutCss.containerMedium}>
      <Typography variant="h2" textAlign="center">
        {title}
      </Typography>

      <ItemGrid items={compactItems} icon={<AngleBracketsIcon />} />

      <Grid container columnSpacing={2} rowGap="30px" mt={{ xs: '40px', md: '80px' }}>
        {items?.map(({ caption, title, text = '', link }, index) => {
          if (!caption || !title || !link) return null

          return (
            <Grid key={index} item xs={12} md={4}>
              <LinkCard caption={caption} title={title} text={text} link={link} />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}

export default TextItemGridSpacedCards
