import { Container, Divider, Grid, Typography } from '@mui/material'
import type { GridProps } from '@mui/material'
import type { ReactElement } from 'react'
import type { BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'
import layoutCss from '@/components/common/styles.module.css'
import Link from 'next/link'
import LinkButton from '@/components/common/LinkButton'
import clsx from 'clsx'

type TimelineItemProps = TimelineItemType & {
  width?: GridProps['md']
}

export const TimelineItem = ({ image, date, text, title, link, end, width = 4 }: TimelineItemProps): ReactElement => {
  return (
    <Grid item xs={12} md={width} className={clsx(css.gridItems, end && css[end])}>
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

type TimelineItemType = {
  date?: string
  title?: string
  text?: string
  image?: React.ImgHTMLAttributes<HTMLImageElement>
  link?: {
    href: string
    title: string
  }
  end?: string
}

type TimelineGroup = {
  continues?: string
  continued?: string
  items: TimelineItemType[]
}

type TimelineProps = BaseBlock & {
  timeline?: TimelineGroup[]
  divider?: boolean
}

const Timeline = ({ title, text, timeline, divider }: TimelineProps) => (
  <Container>
    <Grid container className={clsx(css.container, layoutCss.containerTiny)} flexDirection="column" alignItems="left">
      <Typography variant="h2" mb={3}>
        {title}
      </Typography>

      {text && <Typography>{text}</Typography>}

      {timeline?.map((item, cindex) => (
        <Grid
          container
          key={cindex}
          className={clsx(
            css.roundCorners,
            item.continues && css[item.continues],
            item.continued && css[item.continued],
          )}
          mt={{ xs: 3, md: 7 }}
        >
          {item.items?.map((subitem, index) => (
            <TimelineItem key={index} width={2} {...subitem} />
          ))}
        </Grid>
      ))}
    </Grid>
    {divider && <Divider sx={{ mt: 10 }} />}
  </Container>
)

export default Timeline
