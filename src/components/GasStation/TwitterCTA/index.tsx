import { Button, Container, SvgIcon, Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import SafeLink from '@/components/common/SafeLink'
import { xSharingUrl } from '@/lib/xSharingUrl'
import XIcon from '@/public/images/x-icon.svg'
import useCurrentUrl from '@/hooks/useCurrentUrl'
import css from './styles.module.css'
import Slider from '@/components/GasStation/Slider'

const socialMsg = 'Just applied to get gas credits from @safe Safe{Core} gas station ⛽️'

const TwitterCTA = ({ title, text }: BaseBlock) => {
  const currentUrl = useCurrentUrl()

  const xUrl = xSharingUrl(currentUrl, socialMsg)

  return (
    <Container className={`${layoutCss.containerShort} ${css.container}`}>
      <Typography variant="h2" className={css.title}>
        {title}
      </Typography>

      <SafeLink href={xUrl}>
        <Button variant="contained" size="large" className={css.button}>
          Share on
          <SvgIcon component={XIcon} fontSize="inherit" inheritViewBox />
        </Button>
      </SafeLink>

      <div className={css.sliderWrapper}>
        <Slider text={text} />
      </div>
    </Container>
  )
}

export default TwitterCTA
