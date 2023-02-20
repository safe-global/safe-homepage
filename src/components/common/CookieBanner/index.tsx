import Link from 'next/link'
import { Paper, Typography, FormControlLabel, Checkbox, Button } from '@mui/material'
import { useState } from 'react'
import type { ReactElement } from 'react'

import css from './styles.module.css'

export const enum CookieType {
  NECESSARY = 'necessary',
  ANALYTICS = 'analytics',
}

// TODO: Import from `AppRoutes` once page has been created
const COOKIES_LINK = 'https://safe.global/cookie'

export const CookieBanner = ({
  isAnalyticsEnabled,
  onSubmit,
}: {
  isAnalyticsEnabled: boolean
  onSubmit: (isAnalyticsEnabled: boolean) => void
}): ReactElement | null => {
  const [analytics, setAnalytics] = useState(isAnalyticsEnabled)

  const handleAccept = () => {
    onSubmit(analytics)
  }

  const handleAcceptAll = () => {
    onSubmit(true)
  }

  return (
    <Paper className={css.container} elevation={3}>
      <Typography align="center">
        We use cookies to provide you with the best experience and to help improve our website and application. Please
        read our <Link href={COOKIES_LINK}>Cookie Policy</Link> for more information. By clicking &quot;Accept
        all&quot;, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage and
        provide customer support.
      </Typography>

      <form className={css.grid}>
        <FormControlLabel control={<Checkbox name={CookieType.NECESSARY} checked disabled />} label="Necessary" />

        <FormControlLabel
          control={<Checkbox name={CookieType.ANALYTICS} checked={analytics} />}
          label="Analytics"
          onChange={(_, checked) => {
            setAnalytics(checked)
          }}
        />

        <div className={css.grid}>
          <Button onClick={handleAccept} variant="outlined" disableElevation>
            Accept selection
          </Button>
          <Button onClick={handleAcceptAll} variant="contained" disableElevation>
            Accept all
          </Button>
        </div>
      </form>
    </Paper>
  )
}
