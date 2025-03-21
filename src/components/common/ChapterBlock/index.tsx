import { Container, Grid, Typography } from '@mui/material'
import type { GridProps } from '@mui/material'
import type { ReactElement } from 'react'
import type { BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'
import layoutCss from '@/components/common/styles.module.css'
import Link from 'next/link'
import LinkButton from '@/components/common/LinkButton'

export const GridItem = ({
  image,
  title,
  text,
  link,
  width = 4,
}: Partial<BaseBlock> & { width: GridProps['md'] }): ReactElement => {
  return (
    <Grid item xs={12} md={width} className={css.gridItems}>
      <div>
        {image ? <img {...image} /> : null}

        <Typography color="primary.light" mt={2} className={css.chapterTitle}>
          {text}
        </Typography>

        <Typography variant="h5" className={css.title}>
          {title}
        </Typography>
      </div>

      {link && (
        <Link href={link.href}>
          <LinkButton>{link.title}</LinkButton>
        </Link>
      )}
    </Grid>
  )
}

// TODO: unify the ItemGrid and accept a GridItem component
const ChapterBlock = ({ variant, title, text, items }: BaseBlock & { variant: '3-columns' | '4-columns' }) => (
  <Container>
    <Grid container className={layoutCss.containerShort} flexDirection="column" alignItems="center">
      <Typography variant="h2" mb={3} textAlign={{ md: 'center' }}>
        {title}
      </Typography>

      {text && <Typography>{text}</Typography>}

      <Grid container className={css.roundCorners} mt={{ xs: 3, md: 7 }}>
        {items?.map((item, index) => (
          <GridItem key={index} width={variant === '3-columns' ? 4 : 3} {...item} />
        ))}
      </Grid>
    </Grid>
  </Container>
)

export default ChapterBlock
