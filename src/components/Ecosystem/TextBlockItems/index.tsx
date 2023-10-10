import { type BaseBlock } from '@/components/Home/types'
import { Container, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import Cards from '@/components/Ecosystem/Cards'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'

const TextBlockItems = ({ title, text, buttons, items }: BaseBlock) => {
  return (
    <Container>
      <Grid container className={layoutCss.containerTiny} spacing={{ xs: '30px', xl: '50px' }} mb={30}>
        <Grid item md={5}>
          <Typography variant="h2" mb={{ xs: 2, md: 4 }}>
            {title}
          </Typography>
          <Typography mb={5}>{text}</Typography>
          <ButtonsWrapper buttons={buttons} mobileDirection="row" />
        </Grid>
        <Grid item md={2} display={{ xs: 'none', md: 'block' }} />
        <Grid item md={5}>
          <Cards items={items} stacked />
        </Grid>
      </Grid>
    </Container>
  )
}

export default TextBlockItems
