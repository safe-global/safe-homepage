import { Box, Container, Grid, Typography } from '@mui/material'
import { type BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'
import LinkButton from '@/components/common/LinkButton'
import ArrowIcon from '@/public/images/arrow-out-icon.svg'

const LinkCard = ({ caption, title, link }: Partial<BaseBlock>) => (
  <div className={css.cardWrapper}>
    <div className={css.outline}>
      <div className={css.card}>
        <div className={css.cardHeader}>
          {caption ? <Typography variant="caption">{caption}</Typography> : undefined}
        </div>

        <div className={css.cardBody}>
          <Typography variant="h3" className={css.title}>
            {title}
          </Typography>

          {link ? (
            <LinkButton underline={false} fullSize>
              {link.title}
            </LinkButton>
          ) : undefined}
        </div>

        <ArrowIcon className={css.arrow} />
      </div>
    </div>
  </div>
)

const Governance = ({ caption, title, text, items }: BaseBlock) => {
  return (
    <div className={css.gradient}>
      <div className={css.bg}>
        <Container className={`${layoutCss.containerMedium} ${css.container}`}>
          <Grid container columnSpacing={2} rowGap="20px">
            <Grid item xs={12} md={6}>
              <Typography variant="caption" className={css.caption}>
                {caption}
              </Typography>
              <Box mt={{ xs: '20px', md: '48px' }}>
                <Typography variant="h2">{title}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} display="flex" alignItems="center">
              <Typography color="primary.light">{text}</Typography>
            </Grid>
          </Grid>

          <Grid container columnSpacing={2} rowGap="30px" mt={{ xs: '40px', md: '80px' }}>
            {items?.map(({ caption, title, link }, index) => {
              if (!caption || !title || !link) return null

              return (
                <Grid key={index} item xs={12} md={4}>
                  <LinkCard caption={caption} title={title} link={link} />
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default Governance
