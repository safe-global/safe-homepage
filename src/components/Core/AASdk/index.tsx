import type { BaseBlock } from '@/components/Home/types'
import { Container, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import LinkButton from '@/components/common/LinkButton'
import clsx from 'clsx'
import Link from 'next/link'
import { DOCS_SDK, DOCS_INFRASTRUCTURE, DOCS_SMART_CONTRACTS } from '@/config/constants'
import ItemGrid from '@/components/common/ItemGrid'

const AASdk = ({ caption, title, text, link, items }: BaseBlock) => (
  <Container>
    <Grid container className={layoutCss.containerMedium}>
      <Grid item md={8} display="flex" flexDirection="column" justifyContent="center" gap={{ xs: 3, md: 4 }} mb={5}>
        <Typography variant="h2">{title}</Typography>
        {text && <Typography>{text}</Typography>}
        {link?.title && (
          <Link href={link.href} target="_blank" rel="noreferrer" passHref>
            <LinkButton sx={{ width: 'fit-content' }}>{link.title}</LinkButton>
          </Link>
        )}
      </Grid>
      <div className={css.videoWrapper}>
        <video autoPlay muted playsInline loop className={css.video}>
          <source src="/videos/Core/safe-core.mp4" type="video/mp4" />
          <img src="/images/Core/safe-core-org.png" alt="Safe Core Overview" />
        </video>
        <a
          className={clsx(css.videoLink, css.smartContractsLink)}
          href={DOCS_SMART_CONTRACTS}
          target="_blank"
          rel="noreferrer"
        >
          Smart Contracts
        </a>
        <a className={clsx(css.videoLink, css.sdkLink)} href={DOCS_SDK} target="_blank" rel="noreferrer">
          SDK
        </a>
        <a
          className={clsx(css.videoLink, css.infrastructureLink)}
          href={DOCS_INFRASTRUCTURE}
          target="_blank"
          rel="noreferrer"
        >
          Infrastructure
        </a>
      </div>
    </Grid>

    <ItemGrid title={caption} items={items} />
  </Container>
)

export default AASdk
