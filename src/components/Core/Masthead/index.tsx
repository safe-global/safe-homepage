import { Box, Button, Chip, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import type { ReactElement } from 'react'

import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import type { BaseBlock } from '@/components/Home/types'
import LinkButton from '@/components/common/LinkButton'
import Link from 'next/link'

export const Masthead = ({ title, buttons, caption, image }: BaseBlock): ReactElement => {
  return (
    <Container className={layoutCss.containerShort}>
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
            {buttons ? (
              <Box display="flex" gap={3} color="white" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center">
                {buttons.map((button, index) => {
                  const { text, variant, href } = button
                  const isButton = variant === 'button'

                  return (
                    <Link key={index} href={href} target="_blank" rel="noreferrer" passHref>
                      {isButton ? (
                        <Button variant="contained" size="large" color="secondary">
                          {text}
                        </Button>
                      ) : (
                        <div className={css.linkButton}>
                          <LinkButton color="secondary" sx={{ width: 'fit-content' }}>
                            {text}
                          </LinkButton>
                        </div>
                      )}
                    </Link>
                  )
                })}
              </Box>
            ) : null}
          </Grid>
          {image ? (
            <Grid item xs={12} md={4} lg={3} className={css.image}>
              <img src={image.src} alt={image.alt} />
            </Grid>
          ) : null}
        </Grid>
      </div>
    </Container>
  )
}

export default Masthead
