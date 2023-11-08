import React from 'react'
import { capitalizeFirstLetter } from '@/lib/capitalizeFirstLetter'
import getComponentByName from '@/lib/getComponentByName'
import type { InferGetStaticPropsType } from 'next'
import type { getStaticProps } from '@/pages/campaigns/social-login-gnosis'
import css from './styles.module.css'

const NotFoundComponent = () => <div>Component not found</div>

const SocialLogin = ({ content, fetchedEntries }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={css.pageContainer}>
      {fetchedEntries.map((entry, index) => {
        const campaignComponentName = `Campaign/${capitalizeFirstLetter(content[index])}`

        const Component = getComponentByName(campaignComponentName, NotFoundComponent)

        return <Component {...entry.items[0]} key={content[index]} />
      })}
    </div>
  )
}

export default SocialLogin
