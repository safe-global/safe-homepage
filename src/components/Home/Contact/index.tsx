import { Button, Container, Divider, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import { BaseBlock } from '@/components/Home/types'

const Contact = ({ title, link }: BaseBlock) => {
  return (
    <Container>
      <Divider />
      <Grid container className={layoutCss.container} justifyContent="center">
        <Grid item md={6} textAlign="center">
          <Typography variant="h2" mb={5}>
            {title}
          </Typography>
          <Button href={link?.href} variant="contained" size="large">
            {link?.title}
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Contact
