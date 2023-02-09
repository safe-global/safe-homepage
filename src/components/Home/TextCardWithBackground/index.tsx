import { Grid, Typography, Container, Box } from '@mui/material'
import type { ReactElement } from 'react'

import css from './styles.module.css'

const TextCardWithBackground = ({ title, text }: { title: string; text: string }): ReactElement => {
  return (
    <div className={css.gradient}>
      <Container sx={{ textAlign: 'center' }}>
        <Box height={{ xs: '700px', md: '1090px' }} display="flex" alignItems="center">
          <Grid container justifyContent="center">
            <Grid item md={8}>
              <Typography variant="h2" mb={4} textAlign="center">
                {title}
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography>{text}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  )
}

export default TextCardWithBackground
