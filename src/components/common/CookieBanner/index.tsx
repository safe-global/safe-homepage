import Link from 'next/link'
import { Paper, Typography, FormControlLabel, Checkbox, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import type { ReactElement, SyntheticEvent } from 'react'

import useLocalStorage from '@/services/Storage/useLocalStorage'

import css from './styles.module.css'

export const enum CookieType {
  NECESSARY = 'necessary',
  ANALYTICS = 'analytics',
}

export type CookiePreferences = {
  [CookieType.NECESSARY]: true
  [CookieType.ANALYTICS]: boolean
}

// TODO: Import from `AppRoutes` once page has been created
const COOKIES_LINK = 'https://safe.global/cookie'

export const COOKIES_KEY = 'cookies'

export const CookieBanner = (): ReactElement | null => {
  const [cookies, setCookies] = useLocalStorage<CookiePreferences>(COOKIES_KEY)
  const [formValues, setFormValues] = useState<CookiePreferences>({
    [CookieType.NECESSARY]: true,
    [CookieType.ANALYTICS]: false,
  })
  const [showBanner, setShowBanner] = useState(false)

  // Sync form values with localStorage
  useEffect(() => {
    if (cookies) {
      setFormValues(cookies)
    }
    setShowBanner(!cookies?.[CookieType.NECESSARY])
  }, [cookies])

  const handleChange = (event: SyntheticEvent) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.checked })
  }

  const handleAccept = () => {
    setCookies(formValues)
  }

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      [CookieType.NECESSARY]: true,
      [CookieType.ANALYTICS]: true,
    }

    setFormValues(allAccepted)
    setCookies(allAccepted)
  }

  if (!showBanner) {
    return null
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
        <FormControlLabel
          control={<Checkbox name={CookieType.NECESSARY} checked={formValues[CookieType.NECESSARY]} disabled />}
          label="Necessary"
        />

        <FormControlLabel
          control={<Checkbox name={CookieType.ANALYTICS} checked={formValues[CookieType.ANALYTICS]} />}
          label="Analytics"
          onChange={handleChange}
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
