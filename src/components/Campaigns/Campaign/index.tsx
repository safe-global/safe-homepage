import React from 'react'
import { capitalizeFirstLetter } from '@/lib/capitalizeFirstLetter'
import getComponentByName from '@/lib/getComponentByName'
import type { InferGetStaticPropsType } from 'next'
import type { getStaticProps } from '@/pages/campaigns/[slug]'
import type { Entry } from 'contentful'
import css from './styles.module.css'

const Campaign = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const content = props.content as unknown as Entry[]

  return (
    <div className={css.pageContainer}>
      {content.map((item, index: number) => {
        const contentType = item.sys.contentType.sys.id
        const componentName = capitalizeFirstLetter(contentType)

        const Component = getComponentByName(`Campaigns/${componentName}`, () => <></>)

        return <Component {...item} key={index} />
      })}
    </div>
  )
}

export default Campaign
