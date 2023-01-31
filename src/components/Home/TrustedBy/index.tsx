import { Container, Grid, Typography } from '@mui/material'
import type { ReactElement } from 'react'

import layoutCss from '@/components/common/styles.module.css'
import { BaseBlock } from '@/components/Home/types'

const TrustedBy = ({ title, items }: BaseBlock): ReactElement => {
  return (
    <Container>
      <div className={layoutCss.container}>
        <Typography variant="h2" mb={8} textAlign="center">
          {title}
        </Typography>
        <Grid container justifyContent="center">
          <Grid item container md={10} gap={{ xs: 3, md: 5 }} justifyContent="center" alignItems="center">
            {items &&
              items.map((item, index) => (
                <Grid key={index} item>
                  {item.icon}
                </Grid>
              ))}
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default TrustedBy
