import { useRouter } from 'next/router'
import type { NextPage } from 'next'

import { AppRoutes } from '@/config/routes'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'

const My404Page: NextPage = () => {
  const router = useRouter()

  useIsomorphicLayoutEffect(() => {
    router.replace(AppRoutes.index)
  }, [])

  return null
}

export default My404Page
