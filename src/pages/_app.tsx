import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendMuiTheme,
} from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import type { EmotionCache } from '@emotion/react'
import type { AppProps } from 'next/app'
import type { ReactElement } from 'react'
import Head from 'next/head'

import { createEmotionCache } from '@/styles/emotion'

import { theme } from '@/styles/theme'

import '@/styles/globals.css'
import PageLayout from '@/components/common/PageLayout'
import MetaTags from '@/components/common/MetaTags'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

// Extended theme for CssVarsProvider
const cssVarsTheme = extendMuiTheme(theme)

const App = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps & {
  emotionCache?: EmotionCache
}): ReactElement => {
  return (
    <>
      <Head>
        <title key="default-title">Safe</title>
        <MetaTags />
      </Head>
      <CacheProvider value={emotionCache}>
        <CssVarsProvider theme={cssVarsTheme}>
          <CssBaseline />

          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </CssVarsProvider>
      </CacheProvider>
    </>
  )
}

export default App
