import type { ReactElement } from 'react'
import { homeContent } from '@/components/Home/content'
import PageContent from '../common/PageContent'
import type { InferGetStaticPropsType } from 'next'
import type { getStaticProps } from '@/pages'

export const Home = (props: InferGetStaticPropsType<typeof getStaticProps>): ReactElement => {
  return <PageContent content={homeContent} {...props} />
}

