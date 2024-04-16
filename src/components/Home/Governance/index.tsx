import { Box, Container, Grid, Typography } from '@mui/material'
import { type BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import LinkCard from '@/components/common/LinkCard'

const Governance = ({ caption, title, text, items }: BaseBlock) => {
  return (
    <div className={css.bg}>
      <Container className={`${layoutCss.containerMedium} ${css.container}`}>
        <Grid container columnSpacing={2} rowGap="20px">
          <Grid item xs={12} md={6}>
            <Typography variant="caption">{caption}</Typography>
            <Box mt={{ xs: '20px', md: '48px' }}>
              <Typography variant="h2">{title}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} display="flex" alignItems="center">
            <Typography color="primary.light">{text}</Typography>
          </Grid>
        </Grid>

        <Grid container columnSpacing={2} rowGap="30px" mt={{ xs: '40px', md: '80px' }}>
          {items?.map(({ caption, title, link }, index) => {
            if (!caption || !title || !link) return null

            return (
              <Grid key={index} item xs={12} md={4}>
                <LinkCard caption={caption} title={title} link={link} />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </div>
  )
}

export default Governance
