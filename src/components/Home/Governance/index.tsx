import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { type BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import LinkCard from '@/components/Home/LinkCard'
import css from './styles.module.css'

const Governance = ({ caption, title, text, items, link }: BaseBlock) => {
  return (
    <div className={css.gradientHorizontal}>
      <div className={`${css.gradient}`}>
        <div className={css.bg}>
          <Container className={`${layoutCss.containerMedium} ${css.container}`}>
            <Grid container columnSpacing={2} rowGap="20px">
              <Grid item xs={12} md={6}>
                <Typography variant="caption">{caption}</Typography>
                <Box component="div" mt={{ xs: '20px', md: '48px' }}>
                  <Typography variant="h2">{title}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} display="flex" alignItems="center">
                <Typography>{text}</Typography>
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

            <Grid container className={css.footerWrapper}>
              <Grid item md={6} textAlign="center">
                <Typography variant="h4" mb={5}>
                  Want to reach the Core Contributors?
                </Typography>
                {link ? (
                  <Button href={link.href} target="_blank" rel="noreferrer" variant="contained" size="large">
                    {link.title}
                  </Button>
                ) : undefined}
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default Governance
