import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendMuiTheme,
} from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import type { EmotionCache } from '@emotion/react'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

import { createEmotionCache } from '@/styles/emotion'
import { CookieBannerContextProvider } from '@/contexts/CookieBannerContext'
import { CookieBanner } from '@/components/common/CookieBanner'

import { theme } from '@/styles/theme'

import '@/styles/globals.css'
import PageLayout from '@/components/common/PageLayout'
import { useGa } from '@/hooks/useGa'
import DOMPurify from 'isomorphic-dompurify'
import { SearchParamsContextProvider } from '@/contexts/SearchParamsContext'
import Analytics from '@/services/analytics/Analytics'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

// Extended theme for CssVarsProvider
const cssVarsTheme = extendMuiTheme(theme)

// Allow external links when sanitizing json data
DOMPurify.addHook('afterSanitizeAttributes', function (node) {
  // set all elements owning target to target=_blank
  if ('target' in node) {
    node.setAttribute('target', '_blank')
  }
})

const InitHooks = () => {
  useGa()

  return null
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

const App = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps & {
  Component: NextPageWithLayout
  emotionCache?: EmotionCache
}): ReactElement => {
  // Use the layout defined at the page level, if available or the default layout
  const getLayout = Component.getLayout ?? ((page) => <PageLayout>{page}</PageLayout>)

  return (
    <CacheProvider value={emotionCache}>
      <CssVarsProvider theme={cssVarsTheme}>
        <CssBaseline />

        <CookieBannerContextProvider>
          <InitHooks />

          <SearchParamsContextProvider>{getLayout(<Component {...pageProps} />)}</SearchParamsContextProvider>

          <CookieBanner />
          <Analytics />
        </CookieBannerContextProvider>
      </CssVarsProvider>
    </CacheProvider>
  )
}

export default App
