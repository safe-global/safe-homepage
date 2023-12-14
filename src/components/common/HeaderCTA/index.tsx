import type { BaseBlock } from '@/components/Home/types'
import LinkButton from '@/components/common/LinkButton'
import { Grid, Typography } from '@mui/material'
import css from './styles.module.css'
import SafeLink from '@/components/common/SafeLink'

type HeaderCTAProps = BaseBlock & {
  bigTitle?: boolean
  onClick?: () => void
}

const HeaderCTA = (props: HeaderCTAProps) => {
  return (
    <Grid container mb={{ sm: 5, md: 7 }}>
      <Grid item xs={12} md={!props.bigTitle ? 8 : undefined}>
        <Typography variant="h2" mb={3} className={`${props.bigTitle ? css.bigTitle : null}`}>
          {props.title}
        </Typography>
        <Typography variant="body1" color="primary.light">
          {props.text}
        </Typography>
      </Grid>
      {props.link && (
        <Grid item xs={12} md={4} className={`${css.linkButton} ${!props.bigTitle && css.alignEnd}`}>
          <SafeLink href={props.link.href}>
            <LinkButton className={css.shortPadding} onClick={props.onClick}>
              {props.link.title}
            </LinkButton>
          </SafeLink>
        </Grid>
      )}
    </Grid>
  )
}

export default HeaderCTA
