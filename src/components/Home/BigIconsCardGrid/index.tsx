import type { ReactElement } from 'react'
import { Container, Grid, Typography } from '@mui/material'

import LinkButton from '@/components/common/LinkButton'
import css from './styles.module.css'
import layoutCss from '@/components/common/styles.module.css'
import ArrowIcon from '@/public/images/arrow-out-icon.svg'
import type { BaseBlock } from '@/components/Home/types'
import Link from 'next/link'

const BigIconsCardGrid = ({ items }: BaseBlock): ReactElement => {
  return (
    <Container className={layoutCss.containerMedium}>
      <Grid container spacing={{ xs: '30px', xl: '50px' }}>
        {items?.map((item, index) => (
          <Grid key={index} item xs={12} md={6}>
            <div className={css.card}>
              <Typography variant="caption" mb={3}>
                {item.caption}
              </Typography>

              <img {...item.image} />

              <div className={css.tag}>{item.text}</div>

              <Typography variant="h3" mb={5} mt={2}>
                {item.title}
              </Typography>

              {item.link && (
                <Link href={item.link.href} passHref>
                  <LinkButton sx={{ mt: 'auto' }} fullSize>
                    {item.link.title}
                  </LinkButton>
                </Link>
              )}

              <ArrowIcon className={css.icon} />
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default BigIconsCardGrid
