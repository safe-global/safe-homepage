import type { ReactElement } from 'react'
import { Container, Grid, Typography } from '@mui/material'

import LinkButton from '@/components/common/LinkButton'
import css from './styles.module.css'
import ArrowIcon from '@/public/images/arrow-out-icon.svg'
import type { BaseBlock } from '@/components/Home/types'

const SafeCoreWallet = ({ items }: BaseBlock): ReactElement => {
  return (
    <div className={css.bg}>
      <Container disableGutters>
        <Grid container mt={{ xs: 8, md: '235px' }} spacing="30px">
          {items?.map((item) => {
            // Required by linter
            // @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md#good
            const { alt = '', ...image } = item.image || {}

            return (
              <Grid key={item.caption} item xs={12} md={6}>
                <div className={css.card}>
                  <Typography variant="caption" mb={3}>
                    {item.caption}
                  </Typography>
                  <img alt={alt} {...image} />
                  <div className={css.tag}>{item.text}</div>
                  <Typography variant="h3" mb={5} mt={2}>
                    {item.title}
                  </Typography>
                  <LinkButton href={item.link?.href} sx={{ mt: 'auto' }}>
                    {item.link?.title}
                  </LinkButton>
                  <ArrowIcon className={css.icon} />
                </div>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </div>
  )
}

export default SafeCoreWallet
