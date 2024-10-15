import Head from 'next/head'
import NextLink from 'next/link'
import { AppRoutes } from '@/config/routes'
import { Box, Link } from '@mui/material'
import type { ReactElement } from 'react'
import PageLayout from '@/components/common/PageLayout'
import type { NextPageWithLayout } from '@/pages/_app'

const My404Page: NextPageWithLayout = () => (
  <>
    <Head>
      <title>Safe – Page not found</title>
    </Head>

    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="55vh">
      <h1>Page not found</h1>

      <p>
        <NextLink href={AppRoutes.index}>
          <Link>Go home</Link>
        </NextLink>
      </p>
    </Box>
  </>
)

My404Page.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>
}

export default My404Page
