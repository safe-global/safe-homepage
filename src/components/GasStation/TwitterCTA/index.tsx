import { useEffect, useState } from 'react'
import { Button, Container, SvgIcon, Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import layoutCss from '@/components/common/styles.module.css'
import SafeLink from '@/components/common/SafeLink'
import { twitterSharingUrl } from '@/components/Blog/Socials'
import XIcon from '@/public/images/x-icon.svg'
import css from './styles.module.css'

const socialMsg = 'Just applied to get gas credits from @safe Core gas station'

const TwitterCTA = ({ title }: BaseBlock) => {
  const [currentUrl, setCurrentUrl] = useState('')

  useEffect(() => {
    // Check if running in the browser environment
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href)
    }
  }, [])

  const xUrl = twitterSharingUrl(currentUrl, socialMsg)

  return (
    <Container className={`${layoutCss.containerShort} ${css.container}`}>
      <Typography variant="h2" className={css.title}>
        {title}
      </Typography>

      <SafeLink href={xUrl}>
        <Button variant="contained" size="large" className={css.button}>
          <SvgIcon component={XIcon} fontSize="inherit" inheritViewBox />
          Share on X
        </Button>
      </SafeLink>
    </Container>
  )
}

export default TwitterCTA
