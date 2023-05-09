import { type BaseBlock } from '@/components/Home/types'
import { Button, Container, Grid, Typography, Box } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import Link from 'next/link'
import LinkButton from '@/components/common/LinkButton'
import Cards from '@/components/Ecosystem/Cards'

const TextBlockItems = ({ title, text, buttons, items }: BaseBlock) => {
  return (
    <Container>
      <Grid container className={layoutCss.containerMedium} spacing={{ xs: '30px', xl: '50px' }} mb={30}>
        <Grid item md={5}>
          <Typography variant="h2" mb={{ xs: 2, md: 4 }}>
            {title}
          </Typography>
          <Typography mb={5}>{text}</Typography>
          {buttons ? (
            <Box display="flex" gap={3} color="white" alignItems="center">
              {buttons.map((button, index) => {
                const { text, variant, href } = button
                const isButton = variant === 'button'

                return (
                  <Link key={index} href={href} target="_blank" rel="noreferrer" passHref>
                    {isButton ? (
                      <Button variant="contained" size="large">
                        {text}
                      </Button>
                    ) : (
                      <LinkButton color="secondary" sx={{ width: 'fit-content' }}>
                        {text}
                      </LinkButton>
                    )}
                  </Link>
                )
              })}
            </Box>
          ) : null}
        </Grid>
        <Grid item md={2} display={{ xs: 'none', md: 'block' }} />
        <Grid item md={5}>
          <Cards title="" text="" items={items} stacked />
        </Grid>
      </Grid>
    </Container>
  )
}

export default TextBlockItems
