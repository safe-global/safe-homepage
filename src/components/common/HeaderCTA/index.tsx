import type { BaseBlock } from '@/components/Home/types'
import LinkButton from '@/components/common/LinkButton'
import { Grid, Typography } from '@mui/material'
import NextLink from 'next/link'
import css from './styles.module.css'
import ExternalLinkHOC from '@/components/common/ExternalLinkHOC'

type HeaderCTAProps = BaseBlock & {
  bigTitle?: boolean
  onClick?: () => void
  isExternalLink?: boolean
}

const HeaderCTA = (props: HeaderCTAProps) => {
  const LinkComponent = props.isExternalLink ? ExternalLinkHOC : NextLink

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
          <LinkComponent href={props.link.href} target="_blank" rel="noreferrer" passHref>
            <LinkButton className={css.shortPadding} onClick={props.onClick}>
              {props.link.title}
            </LinkButton>
          </LinkComponent>
        </Grid>
      )}
    </Grid>
  )
}

export default HeaderCTA
