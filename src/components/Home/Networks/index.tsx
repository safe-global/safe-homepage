import type { BaseBlock } from '@/components/Home/types'
import { Grid, Typography } from '@mui/material'

import css from './styles.module.css'

const Networks = ({ title, text, items }: BaseBlock) => {
  return (
    <div>
      <Typography variant="h2" textAlign="center" mb={{ xs: 5, md: 8 }}>
        {title}
      </Typography>
      <div className={css.gradient}>
        <Grid container gap={3} alignItems="center" justifyContent="center">
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
      </div>
      <Typography color="border.main" textAlign="center" mt={{ xs: 4, md: 5 }}>
        {text}
      </Typography>
    </div>
  )
}

export default Networks
