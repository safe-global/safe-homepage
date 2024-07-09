import { Button, Container, SvgIcon, Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import SafeLink from '@/components/common/SafeLink'
import { xSharingUrl } from '@/lib/xSharingUrl'
import XIcon from '@/public/images/x-icon.svg'
import useCurrentUrl from '@/hooks/useCurrentUrl'
import Slider from '@/components/GasStation/Slider'
import clsx from 'clsx'
import css from './styles.module.css'

const socialMsg = 'Just checked out the @safe {Core} Gas Station ⛽️ with gas credits worth $250k'

const TwitterCTA = ({ title, text }: BaseBlock) => {
  const currentUrl = useCurrentUrl()

  const xUrl = xSharingUrl(currentUrl, socialMsg)

  return (
    <>
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
      </Container>

      <div className={css.sliderWrapper}>
        <div className={css.gradientBase} />

        <Slider text={text} />

        <div className={clsx(css.gradientBase, css.gradientFlipped)} />
      </div>
    </>
  )
}

export default TwitterCTA
