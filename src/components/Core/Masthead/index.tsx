import { Chip, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import type { ReactElement } from 'react'

import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import type { BaseBlock } from '@/components/Home/types'
import ButtonsWrapper from '@/components/common/ButtonsWrapper'

export const Masthead = ({ title, buttons, caption, image }: BaseBlock): ReactElement => {
  return (
    <Container className={layoutCss.containerShort} id="masthead">
      <div className={css.container}>
        <Grid container spacing={{ xs: '90px', sm: '30px' }} justifyContent="space-between">
          <Grid item xs={12} md={7} lg={8}>
            <Chip
              label={
                <Typography variant="caption" color="text.primary">
                  {caption}
                </Typography>
              }
              className={css.chip}
              variant="outlined"
            />
            <Typography variant="h2" color="text.primary" mt={3} mb={5}>
              {title}
            </Typography>
            <ButtonsWrapper buttons={buttons} btnColor="secondary" />
          </Grid>
          {image ? (
            <Grid item xs={12} md={4} lg={3} xl={2.5} className={css.image}>
              <img src={image.src} alt={image.alt} />
            </Grid>
          ) : null}
        </Grid>
      </div>
    </Container>
  )
}

export default Masthead
