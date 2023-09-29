import type { BaseBlock } from '@/components/Home/types'
import LinkButton from '@/components/common/LinkButton'
import { Grid, Typography } from '@mui/material'
import Link from 'next/link'
import css from './styles.module.css'

const HeaderCTA = (props: BaseBlock) => {
  return (
    <Grid container mb={7}>
      <Grid item xs={12} md={8}>
        <Typography variant="h2" mb={3}>
          {props.title}
        </Typography>
        <Typography variant="body1" color="primary.light">
          {props.text}
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} className={css.linkButton}>
        {props.link && (
          <Link href={props.link.href} target="_blank" rel="noreferrer" passHref>
            <LinkButton className={css.shortPadding}>{props.link.title}</LinkButton>
          </Link>
        )}
      </Grid>
    </Grid>
  )
}

export default HeaderCTA
