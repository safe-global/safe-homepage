import type { ReactElement } from 'react'
import PageContent from '@/components/common/PageContent'
import teaserContent from '@/content/teaser.json'

export const Teaser = (): ReactElement => <PageContent content={teaserContent} path="teaser.json" />
