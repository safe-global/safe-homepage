import { Container, Grid, Typography } from '@mui/material'
import type { ReactElement } from 'react'

import layoutCss from '@/components/common/styles.module.css'
import type { BaseBlock } from '@/components/Home/types'

const TrustedBy = ({ title, items }: BaseBlock): ReactElement => {
  return (
    <Container>
      <div className={layoutCss.container}>
        <Typography variant="h2" mb={8} textAlign="center">
          {title}
        </Typography>
        <Grid container justifyContent="center">
          <Grid item container md={10} gap={{ xs: 3, md: 5 }} justifyContent="center" alignItems="center">
            {items?.map((item, index) => {
              // Required by linter
              // @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md#good
              const { alt = '', ...image } = item.image || {}

              return (
                <Grid key={index} item>
                  <img alt={alt} {...image} />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default TrustedBy
