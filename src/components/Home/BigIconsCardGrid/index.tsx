import type { ReactElement } from 'react'
import { Container, Grid, Typography } from '@mui/material'

import LinkButton from '@/components/common/LinkButton'
import css from './styles.module.css'
import ArrowIcon from '@/public/images/arrow-out-icon.svg'

type BigCardProps = {
  caption: string
  title: string
  link: {
    title: string
    href: string
  }
  titleIcon: {
    src: string
    alt: string
  }
  icon: {
    src: string
    alt: string
  }
}

type BigCardGridProps = {
  items: BigCardProps[]
}

const BigIconsCardGrid = ({ items }: BigCardGridProps): ReactElement => {
  return (
    <div className={css.bg}>
      <Container disableGutters>
        <Grid container mt={{ xs: 8, md: '235px' }} spacing="30px">
          {items &&
            items.map((item) => (
              <Grid key={item.caption} item xs={12} md={6}>
                <div className={css.card}>
                  <Typography variant="caption" mb={3}>
                    {item.caption}
                  </Typography>
                  <img {...item.icon} />
                  <div className={css.tag}>
                    <img {...item.titleIcon} />
                  </div>
                  <Typography variant="h3" mb={5} mt={2}>
                    {item.title}
                  </Typography>
                  {/* FIXME: target not allowed for type ButtonProps */}
                  {/* @ts-ignore */}
                  <LinkButton href={item.link?.href} target="_blank" rel="noreferrer" sx={{ mt: 'auto' }} fullSize>
                    {item.link?.title}
                  </LinkButton>
                  <ArrowIcon className={css.icon} />
                </div>
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  )
}

export default BigIconsCardGrid
