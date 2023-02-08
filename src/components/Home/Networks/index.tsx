import type { BaseBlock } from '@/components/Home/types'
import { Grid, Typography } from '@mui/material'

import { Image } from '@/components/common/Image'

import css from './styles.module.css'

const Networks = ({ title, text, items }: BaseBlock) => {
  return (
    <div>
      <Typography variant="h2" textAlign="center" mb={{ xs: 5, md: 8 }}>
        {title}
      </Typography>
      <div className={css.gradient}>
        <Grid container gap={3} alignItems="center" justifyContent="center">
          {items &&
            items.map((item, index) => (
              <Grid key={index} item>
                <Image {...item.image} />
              </Grid>
            ))}
        </Grid>
      </div>
      <Typography color="border.main" textAlign="center" mt={{ xs: 4, md: 5 }}>
        {text}
      </Typography>
    </div>
  )
}

export default Networks
