import { Container, Grid, Typography } from '@mui/material'
import type { ReactElement } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import type { BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'

const LogoImage = ({ image, link }: { image?: BaseBlock['image']; link?: BaseBlock['link'] }): ReactElement => {
  if (link?.href) {
    return (
      <Link href={link.href} passHref target="_blank" rel="noreferrer">
        <img {...image} />
      </Link>
    )
  }

  return <img {...image} />
}

const TitleLogos = ({ title, items, hideMobile }: BaseBlock & { hideMobile?: boolean }): ReactElement => {
  return (
    <Container className={clsx(layoutCss.containerMedium, hideMobile && layoutCss.hideMobile)}>
      <Typography variant="h2" mb={8} textAlign="center">
        {title}
      </Typography>
      <Grid container justifyContent="center">
        <Grid item container md={10} gap={{ xs: 3, md: 5, lg: 7 }} justifyContent="center" alignItems="center">
          {items?.map((item, index) => {
            return (
              <Grid key={index} item>
                <LogoImage {...item} />
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Container>
  )
}

export default TitleLogos
