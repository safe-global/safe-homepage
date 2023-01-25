import { useEffect, useLayoutEffect } from 'react'

import { IS_BROWSER } from '@/config/constants'

export const useIsomorphicLayoutEffect = IS_BROWSER ? useEffect : useLayoutEffect
