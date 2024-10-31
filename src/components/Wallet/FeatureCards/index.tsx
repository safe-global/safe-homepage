import type { BaseBlock } from '@/components/Home/types'
import { Container, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import LinkButton from '@/components/common/LinkButton'

const CardContent = ({ caption, title, text, link }: Partial<BaseBlock>) => {
  return (
    <div className={css.cardContent}>
      <Typography variant="caption" className={css.caption}>
        {caption}
      </Typography>

      <Typography variant="h4">{title}</Typography>

      <Typography color="primary.light">{text}</Typography>

      {link ? (
        <LinkButton underline={false} href={link.href}>
          {link.title}
        </LinkButton>
      ) : undefined}
    </div>
  )
}

const FeatureCards = ({ title, text, items = [] }: BaseBlock) => {
  const lastItem = items[items.length - 1]

  return (
    <Container className={layoutCss.containerMedium}>
      <Grid container justifyContent="space-between" columnSpacing="30px" rowGap="30px">
        <Grid item xs={12} md={7}>
          <Typography variant="h2">{title}</Typography>
        </Grid>

        <Grid item xs={12} md={5} alignContent="flex-end">
          <Typography variant="h5">{text}</Typography>
        </Grid>
      </Grid>

      <Grid container mt={{ xs: '50px', md: '100px' }}>
        {/* last item is part of the component */}
        {lastItem && (
          <Grid item xs={12}>
            <div className={`${css.card} ${css.lastCard}`}>
              <img className={css.image} src={lastItem.image?.src} alt={lastItem.image?.alt} />

              <CardContent {...lastItem} />
            </div>
          </Grid>
        )}
      </Grid>
    </Container>
  )
}

export default FeatureCards
