import { Container, Grid, Typography } from '@mui/material'
import type { GridProps } from '@mui/material'
import type { ReactElement } from 'react'
import type { BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'
import layoutCss from '@/components/common/styles.module.css'
import Link from 'next/link'
import LinkButton from '@/components/common/LinkButton'
import clsx from 'clsx'

export const TimelineItem = ({
  image,
  date,
  text,
  title,
  link,
  end,
  width = 4,
}: Partial<BaseBlock> & { width: GridProps['md'] }): ReactElement => {
  return (
    <Grid item xs={12} md={width} className={clsx(css.gridItems, css[end])}>
      <div>
        {image ? <img {...image} /> : null}

        <Typography color="primary.light" mt={2} className={css.timelineItemDate}>
          {date}
        </Typography>
        <Typography variant="h3" color="primary.light" mt={2} className={css.timelineItemTitle}>
          {title}
        </Typography>
        <Typography color="primary.light" mt={2} className={css.timelineItemText}>
          {text}
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

const TimelineBlock = ({ title, text, timeline }: BaseBlock) => (
  <Container>
    <Grid container className={clsx(css.container, layoutCss.containerTiny)} flexDirection="column" alignItems="left">
      <Typography variant="h2" mb={3} textAlign={{ md: 'left' }}>
        {title}
      </Typography>

      {text && <Typography textAlign={{ md: 'left' }}>{text}</Typography>}

      {timeline?.map((item, cindex) => (
        <Grid
          container
          className={clsx(css.roundCorners, css[item.continues], css[item.continued])}
          mt={{ xs: 3, md: 7 }}
        >
          {item.items?.map((subitem, index) => (
            <TimelineItem key={index} width="2" {...subitem} />
          ))}
        </Grid>
      ))}
    </Grid>
  </Container>
)

export default TimelineBlock
