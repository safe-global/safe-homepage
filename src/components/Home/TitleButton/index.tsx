import { Button, Container, Divider, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'

type TitleButtonProps = {
  title: string
  link: {
    title: string
    href: string
  }
}

const TitleButton = ({ title, link }: TitleButtonProps) => {
  return (
    <Container>
      <Divider sx={{ mt: '100px' }} />
      <Grid container className={layoutCss.containerMedium} justifyContent="center">
        <Grid item md={6} textAlign="center">
          <Typography variant="h2" mb={5}>
            {title}
          </Typography>
          <Button href={link.href} target="_blank" rel="noreferrer" variant="contained" size="large">
            {link.title}
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default TitleButton
