import { ButtonBase, Container, Grid, Typography } from '@mui/material'
import RichText from '@/components/common/RichText'
import { isEntryTypeBaseBlock } from '@/lib/typeGuards'
import type { BaseBlockEntry } from '@/config/types'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

const VerticalSlide = (props: BaseBlockEntry) => {
  const { title, items } = props.fields

  const itemsList = items?.filter(isEntryTypeBaseBlock) ?? []

  return (
    <Container className={layoutCss.containerShort}>
      <div className={css.title}>
        <RichText {...title} />
      </div>

      <Grid container justifyContent="flex-end">
        <Grid item xs={5} className={css.cardWrapper}>
          {itemsList.map((item, index) => {
            const { title, text } = item.fields

            return (
              <Grid item key={index} xs={12}>
                <ButtonBase onClick={() => console.log('change')} disableRipple className={css.card}>
                  <Typography variant="h5">
                    <RichText {...title} />
                  </Typography>

                  {text && (
                    <Typography color="primary.light" component="div">
                      <RichText {...text} />
                    </Typography>
                  )}
                </ButtonBase>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Container>
  )
}

export default VerticalSlide
