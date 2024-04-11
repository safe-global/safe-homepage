import RichText from '@/components/common/RichText'
import { type BaseBlockEntry } from '@/components/Home/types'
import { Container, Grid, Typography } from '@mui/material'
import layoutCss from '@/components/common/styles.module.css'
import Marquee from '@/components/common/Marquee'
import { isEntryTypeBaseBlock } from '@/lib/typeGuards'

const SafetyNumbers = (props: BaseBlockEntry) => {
  const { title, text, items } = props.fields

  const numbersList = items?.filter(isEntryTypeBaseBlock) || []

  return (
    <>
      <Container className={layoutCss.containerMedium}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <RichText {...title} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography mb={3}>{text}</Typography>
          </Grid>
        </Grid>
      </Container>

      <Marquee items={numbersList} />
    </>
  )
}

export default SafetyNumbers
